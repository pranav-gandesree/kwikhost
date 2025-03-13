import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, BUCKET_NAME } from "./s3";

// export async function generateDownloadUrl(fileKey: string) {
//   const command = new GetObjectCommand({
//     Bucket: BUCKET_NAME,
//     Key: `kwikhost-files/${fileKey}`,
//   });

//   const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); 
//   return { url: signedUrl, error: null };

// }






export async function generateDownloadUrl(fileKey: string) {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `kwikhost-files/${fileKey}`,
    });

    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 1 hour validity
    return { url: signedUrl, error: null };
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return { url: null, error: 'Failed to generate file download URL' };
  }
}
