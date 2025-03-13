
import { NextResponse } from "next/server";
import { generateUploadUrl } from "@/lib/generatePresignedUrl";
import { db } from "@/db/drizzle";
import { file, domain } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { userId, domainName, fileType } = await req.json();

    if (!domainName || !fileType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fileKey = `${domainName}`; // Store in a folder based on subdomain
    const presignedUrl = await generateUploadUrl(fileKey, fileType);

    // Check if the domain already exists
    let domainRecord = await db
      .select({
        domainId: domain.id,
      })
      .from(domain)
      .where(eq(domain.domain, domainName))
      .limit(1);

    let domainId;

    if (domainRecord.length > 0) {
      // Domain exists, use existing domainId
      domainId = domainRecord[0].domainId;
    } else {
      // Insert new domain and get the domainId
      const insertedDomain = await db
        .insert(domain)
        .values({
          domain: domainName,
          userId: userId,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning({ domainId: domain.id });

      domainId = insertedDomain[0].domainId;
    }

    // Save file metadata to the database
    await db.insert(file).values({
      domainId,
      file_url: `${fileKey}`,
      file_type: fileType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ presignedUrl });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}
