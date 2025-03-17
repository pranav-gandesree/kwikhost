'use server'

import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { generateUploadUrl } from "@/lib/generatePresignedUrl";
import { db } from "@/db/drizzle";
import { file, domain, user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getServerSession  } from "next-auth/next";

import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { s3Client, BUCKET_NAME } from "../../../lib/s3"
import { DeleteDomainById } from '@/actions/deleteProject';


export async function POST(req: Request, res: Response) {
  const session = await getServerSession({ req, res, ...authOptions })


  if (!session) {
    return NextResponse.json(
      { error: "Failed to get data user not authenticatedd worjigrnei" },
      { status: 500 }
    );
  }
  

  try {
    const { userId, domainName, fileType } = await req.json();

    if (!domainName || !fileType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    //get details of projects_limit and projects_count
    const result = await db
      .select({
        projectLimit: user.projectLimit,
        projectCount: user.projectCount
      })
      .from(user)
      .where(eq(user.id, userId));


      if (result.length === 0) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      const { projectLimit, projectCount } = result[0];

      if (projectLimit !== null  && (projectCount ?? 0) >= projectLimit) {
        return NextResponse.json(
          { error: "Project limit reached. Upgrade your plan to add more projects." },
          { status: 403 }
        );
      }

    // Check if the domain already exists
    const domainRecord = await db
      .select({
        domainId: domain.id,
      })
      .from(domain)
      .where(eq(domain.domain, domainName))
      .limit(1);

    if (domainRecord.length > 0) {
      // If domain already exists, return error response
      return NextResponse.json({ error: "Domain already exists. Please use another domain." }, { status: 400 });
    }

    // Generate a presigned URL for S3 upload
    const fileKey = `${domainName}`;
    const presignedUrl = await generateUploadUrl(fileKey, fileType);

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

    const domainId = insertedDomain[0].domainId;

    // Save file metadata to the database
    await db.insert(file).values({
      domainId,
      file_url: `${fileKey}`,
      file_type: fileType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db
    .update(user)
    .set({
      projectCount: (projectCount ?? 0) + 1
    })
    .where(eq(user.id, userId));


    return NextResponse.json({ presignedUrl });

  
  } 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}





export async function PUT(request: Request){
  
}
















export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get('fileKey');
  const domainId = searchParams.get('domainId');

  if (!fileKey || !domainId) {
    return NextResponse.json(
      { error: 'Missing fileKey or domainId parameter' },
      { status: 400 }
    );
  }

  try{

    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `kwikhost-files/${fileKey}`,
    });

    await s3Client.send(command);
    console.log(`File deleted successfully from S3: ${fileKey}`);

    // 🗑️ Step 2: Delete domain from database
    await DeleteDomainById(domainId);
    console.log(`Domain deleted successfully from database: ${domainId}`);

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Error deleting the file:", error);
    return { url: null, error: 'Failed to delete the file' };
  }



}
