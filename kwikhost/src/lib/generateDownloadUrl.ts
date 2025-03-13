import { GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client, BUCKET_NAME } from "./s3";

export async function generateDownloadUrl(fileKey: string) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: `kwikhost-files/${fileKey}`,
  });

  // const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 60 seconds validity
  // return url;

  
  try {
    const { Body } = await s3Client.send(command);
    if (Body instanceof ReadableStream) {
      const blob = await new Response(Body).blob();
      return blob;
    }
  } catch (error) {
    console.error("Error fetching file as blob:", error);
    throw error;
  }


}
