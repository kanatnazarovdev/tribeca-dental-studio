import { revalidateTag, revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug?: { current?: string };
    }>(req, SANITY_WEBHOOK_SECRET);

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad Request: Missing document type", { status: 400 });
    }

    // If a post document was updated/created/deleted in Sanity:
    if (body._type === "post") {
      const slug = body.slug?.current;

      // FIX: Added 'max' (or 'default') as the second parameter to satisfy TypeScript
      revalidateTag("posts-list", "max");

      if (slug) {
        revalidateTag(`post:${slug}`, "max");

        // Revalidate all localized blog paths
        revalidatePath(`/en/blog/${slug}`);
        revalidatePath(`/es/blog/${slug}`);
        revalidatePath(`/zh/blog/${slug}`);
      }

      // Also revalidate main blog indexes
      revalidatePath("/en/blog");
      revalidatePath("/es/blog");
      revalidatePath("/zh/blog");

      console.log(`✅ [Revalidated Cache] Document post updated: ${slug || "list"}`);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({ message: "No action required" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("❌ Revalidation Error:", err);
    return new NextResponse(err.message, { status: 500 });
  }
}