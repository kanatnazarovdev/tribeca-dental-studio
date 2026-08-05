import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "sz25tzp7",
  dataset: "production",
  apiVersion: "2024-03-01",
  token:
    "sk0nvK2KCQ9pOHUgvaz5JrkGB8QR0L1SXA22GTnaie2hKQcErqoPJ664S4x08kMGMXCYhDDWPK5l0G7oGoBCM1YQk5c966jWD6zquNIMYNPPPuwrpYSlUENu0xqkO5NByNnWACHnB55y2S8HoD2hPASsXZIlAvBdeOvwHv6MXfXNWus6vOMR", // Your Sanity Write Token
  useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop() || "team-member.jpg",
    });
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.error("Image upload failed for:", imageUrl, err);
    return null;
  }
}

async function migrateTeamAutomatically() {
  const endpoint =
    "https://tribecadentalstudio.com/wp-json/wp/v2/posts?post_type=team&per_page=100";
  console.log(`Fetching team members automatically from: ${endpoint}`);

  const response = await fetch(endpoint);
  if (!response.ok) {
    console.error(
      `❌ API failed with status: ${response.status} ${response.statusText}`,
    );
    return;
  }

  const members = await response.json();
  if (!Array.isArray(members)) {
    console.error("❌ Response is not an array:", members);
    return;
  }

  console.log(`Found ${members.length} team members. Starting migration...`);

  for (const [index, member] of members.entries()) {
    const name = member.title?.rendered || "Unknown Doctor";
    const slug = member.slug || `doctor-${index}`;

    // Extract featured image from WordPress
    let imageRef = null;
    const imageUrl =
      member.featured_image_url || member.yoast_head_json?.og_image?.[0]?.url;
    if (imageUrl) {
      console.log(`Uploading image for "${name}"...`);
      imageRef = await uploadImageToSanity(imageUrl);
    }

    const doc = {
      _type: "doctor", // Matches your Sanity schema
      _id: `imported-team-${member.id || index}`,
      name: name,
      slug: {
        _type: "slug",
        current: slug,
      },
      // Maps ACF job title if you used Advanced Custom Fields, or defaults to specialist
      role: member.acf?.job_title || "Dental Specialist",
      image: imageRef,
      bio: member.content?.rendered
        ? [
            {
              _type: "block",
              children: [
                {
                  _type: "span",
                  text: member.content.rendered.replace(/<[^>]*>?/gm, ""),
                },
              ],
            },
          ]
        : [],
      order: index + 1,
    };

    await client.createOrReplace(doc);
    console.log(
      `✅ [${index + 1}/${members.length}] Automatically imported: "${name}"`,
    );
  }

  console.log("🎉 Automated Team Migration Complete!");
}

migrateTeamAutomatically();
