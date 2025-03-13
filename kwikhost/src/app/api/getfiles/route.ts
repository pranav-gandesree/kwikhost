
import { NextRequest, NextResponse } from 'next/server';
import { generateDownloadUrl } from '@/lib/generateDownloadUrl';

// GET handler - Returns a signed URL for client-side download
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get('fileKey');

  if (!fileKey) {
    return NextResponse.json(
      { error: 'Missing fileKey parameter' },
      { status: 400 }
    );
  }
  const { url, error } = await generateDownloadUrl(fileKey);
  
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  return NextResponse.json({ url });
}







// Function to directly fetch file content from S3
// async function fetchFileContent(fileKey: string) {
//   try {
//     const command = new GetObjectCommand({
//       Bucket: BUCKET_NAME,
//       Key: `kwikhost-files/${fileKey}`,
//     });

//     const { Body, ContentType } = await s3Client.send(command);
    
//     if (!Body) {
//       return { content: null, contentType: null, error: 'File not found' };
//     }

//     if (Body instanceof ReadableStream || Body?.transformToWebStream) {
//       const stream = Body instanceof ReadableStream ? Body : Body.transformToWebStream();
//       return { 
//         content: stream, 
//         contentType: ContentType || 'application/octet-stream',
//         error: null 
//       };
//     }

//     return { content: null, contentType: null, error: 'Unable to process file' };
//   } catch (error) {
//     console.error("Error fetching file:", error);
//     return { content: null, contentType: null, error: 'Failed to retrieve file' };
//   }
// }


// POST handler - Returns the file directly (for smaller files)
// export async function POST(request: NextRequest) {
//   try {
//     const { fileKey } = await request.json();
    
//     if (!fileKey) {
//       return NextResponse.json(
//         { error: 'Missing fileKey parameter' },
//         { status: 400 }
//       );
//     }

//     const { content, contentType, error } = await fetchFileContent(fileKey);
    
//     if (error) {
//       return NextResponse.json({ error }, { status: 404 });
//     }

//     if (content) {
//       return new Response(content, {
//         headers: {
//           'Content-Type': contentType || 'application/octet-stream',
//           'Content-Disposition': `attachment; filename="${fileKey.split('/').pop()}"`,
//         },
//       });
//     }

//     return NextResponse.json(
//       { error: 'Unable to process file' },
//       { status: 500 }
//     );
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return NextResponse.json(
//       { error: 'Server error processing request' },
//       { status: 500 }
//     );
//   }
// }