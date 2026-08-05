// import-wp.mjs
import { createClient } from "@sanity/client";

// --- CONFIGURATION ---
const SANITY_PROJECT_ID = "sz25tzp7"; // Replace with your Sanity Project ID
const SANITY_DATASET = "production";                // Dataset name
const SANITY_WRITE_TOKEN = "sk0nvK2KCQ9pOHUgvaz5JrkGB8QR0L1SXA22GTnaie2hKQcErqoPJ664S4x08kMGMXCYhDDWPK5l0G7oGoBCM1YQk5c966jWD6zquNIMYNPPPuwrpYSlUENu0xqkO5NByNnWACHnB55y2S8HoD2hPASsXZIlAvBdeOvwHv6MXfXNWus6vOMR"; // API Token with Editor/Admin access

const WP_API_BASE = "https://tribecadentalstudio.com/wp-json/wp/v2/posts";
const MAX_POSTS_TO_IMPORT = 200;
const POSTS_PER_PAGE = 100;

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: "2024-01-01",
});

// Helper function to decode HTML entities in titles
function decodeHTMLEntities(str) {
  if (!str) return "";
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#038;/g, "&");
}

// Helper to strip HTML tags for clean excerpts
function cleanExcerpt(htmlStr) {
  if (!htmlStr) return "";
  const plainText = htmlStr.replace(/<[^>]*>?/gm, "").trim();
  const decoded = decodeHTMLEntities(plainText);
  return decoded.length > 160 ? `${decoded.substring(0, 157)}...` : decoded;
}

// Upload featured media directly to Sanity Asset Pipeline
async function uploadImageFromUrl(imageUrl, altText = "") {
  if (!imageUrl) return null;
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) return null;

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = imageUrl.split("/").pop().split("?")[0] || "featured-image.jpg";

    const asset = await client.assets.upload("image", buffer, {
      filename,
    });

    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id,
      },
      alt: decodeHTMLEntities(altText) || "Blog post featured image",
    };
  } catch (err) {
    console.warn(`⚠️ Could not upload image (${imageUrl}):`, err.message);
    return null;
  }
}

async function runImport() {
  console.log(`🚀 Starting import process (Target: ${MAX_POSTS_TO_IMPORT} posts)...`);

  let importedCount = 0;
  const totalPagesToFetch = Math.ceil(MAX_POSTS_TO_IMPORT / POSTS_PER_PAGE);

  for (let page = 1; page <= totalPagesToFetch; page++) {
    console.log(`\n📥 Fetching Page ${page} from WordPress API...`);

    const url = `${WP_API_BASE}?per_page=${POSTS_PER_PAGE}&page=${page}&_embed`;
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`⚠️ Reached end of WordPress pages or API error on Page ${page}.`);
      break;
    }

    const posts = await response.json();
    if (!posts || posts.length === 0) {
      console.log("No more posts found.");
      break;
    }

    console.log(`Processing ${posts.length} posts on Page ${page}...`);

    for (const post of posts) {
      if (importedCount >= MAX_POSTS_TO_IMPORT) {
        console.log(`\n🎯 Reached target limit of ${MAX_POSTS_TO_IMPORT} posts.`);
        break;
      }

      const cleanTitle = decodeHTMLEntities(post.title?.rendered || "Untitled Post");
      const slug = post.slug;
      const rawHtml = post.content?.rendered || "";
      const excerpt = cleanExcerpt(post.excerpt?.rendered || rawHtml);
      const publishedAt = post.date ? new Date(post.date).toISOString() : new Date().toISOString();

      // Extract image & alt text from embed data
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      const imageUrl = featuredMedia?.source_url;
      const imageAlt = featuredMedia?.alt_text || cleanTitle;

      let mainImageObj = null;
      if (imageUrl) {
        process.stdout.write(`Uploading image for "${cleanTitle.substring(0, 30)}..." `);
        mainImageObj = await uploadImageFromUrl(imageUrl, imageAlt);
      }

      // Estimate reading time based on word count
      const wordCount = rawHtml.replace(/<[^>]*>?/gm, "").split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      const doc = {
        _type: "post",
        language: "en",
        title: cleanTitle,
        slug: {
          _type: "slug",
          current: slug,
        },
        excerpt: excerpt,
        publishedAt: publishedAt,
        readTime: readTime,
        htmlBody: rawHtml,
        ...(mainImageObj && { mainImage: mainImageObj }),
      };

      try {
        await client.create(doc);
        importedCount++;
        console.log(`\n✅ [${importedCount}/${MAX_POSTS_TO_IMPORT}] Imported: "${cleanTitle}" (/ ${slug})`);
      } catch (err) {
        console.error(`\n❌ Failed to create post "${cleanTitle}":`, err.message);
      }
    }
  }

  console.log(`\n🎉 Import Complete! Total posts successfully imported: ${importedCount}`);
}

runImport();