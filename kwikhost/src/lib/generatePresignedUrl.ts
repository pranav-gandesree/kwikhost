import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, BUCKET_NAME } from "./s3";

export async function generateUploadUrl(fileKey: string, fileType: string) {

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `kwikhost-files/${fileKey}`, // Store in subfolder with subdomain
    ContentType: fileType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // Valid for 60 seconds
  return url;
}
