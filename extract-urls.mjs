import fs from 'fs';

// 1. Read your exported WordPress JSON file (save it as 'wordpress-posts.json' in your project root)
const rawData = fs.readFileSync('wordpress-posts.json', 'utf8');
const posts = JSON.parse(rawData);

// 2. Map through and pull just the slugs or links
const urls = posts.map((post) => {
  const slug = post.slug;
  return `/${slug}/`;
});

// 3. Print out only the URLs cleanly
console.log(urls.join('\n'));

// Optional: Save them directly to a text file
fs.writeFileSync('extracted-urls3.txt', urls.join('\n'));
console.log('\n✅ Saved all clean URLs to extracted-urls.txt!');