import fs from 'fs';
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "sz25tzp7",
  dataset: "production",
  apiVersion: "2024-03-01",
  token: "skoFsVVcHZBU79efDAzGzwUrX4CuDkgfejw54rPnVJ0JTQP7YJ8WzNcHhwZJFau9lqDm8WB60hoqH8NXTcjbqAyc1I4qXPFHbT4Z4B6BKhwfL9V0GIRjv5E1IubsPX9WOEuJsm9NA9dBxgDdFyyHDprOv65SzgW9ZyExgXnIuHX31S6fxsaY",
  useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop() || "team.jpg",
    });
    return {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    return null;
  }
}

async function importTeam() {
  const rawData = fs.readFileSync('team-data.json', 'utf8');
  const teamMembers = JSON.parse(rawData);

  console.log(`Importing ${teamMembers.length} team members into Sanity...`);

  for (const [index, member] of teamMembers.entries()) {
    let imageRef = null;
    if (member.imageUrl) {
      imageRef = await uploadImageToSanity(member.imageUrl);
    }

    const isDoctor = member.name.toLowerCase().startsWith("dr.");

    const doc = {
      _type: "doctor",
      _id: `team-${member.id || index + 1}`,
      name: member.name,
      slug: { _type: "slug", current: member.slug },
      role: isDoctor ? "Dental Specialist" : "Clinical Staff / Hygiene",
      image: imageRef,
      bio: member.bio ? [{
        _type: "block",
        children: [{ _type: "span", text: member.bio.replace(/<[^>]*>?/gm, '') }]
      }] : [],
      order: index + 1,
    };

    await client.createOrReplace(doc);
    console.log(`✅ [${index + 1}/${teamMembers.length}] Imported: ${member.name}`);
  }

  console.log("🎉 Sanity Team Import Finished!");
}

importTeam();