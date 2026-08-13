import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ posts: [] }, { status: 200 });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`,
      { next: { revalidate: 3600 } } 
    );

    if (!res.ok) throw new Error("Failed to fetch Instagram feed");

    const data = await res.json();
    const posts = data.data
      ?.slice(0, 6)
      .map((post: any) => ({
        id: post.id,
        media_url: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
        permalink: post.permalink,
        caption: post.caption || "Instagram Post",
      }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Instagram API Error:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}