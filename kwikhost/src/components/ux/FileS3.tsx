// 'use client'

// import { useEffect, useState } from "react";

// export function FileS3({ fileKey, fileType }: { fileKey: string, fileType?: string }) {
//   const [fileUrl, setFileUrl] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
  
//   // Check if the file is an image based on file type or extension
//   const isImage = fileType?.startsWith('image/') || 
//     fileKey.match(/\.(jpeg|jpg|gif|png|webp|svg|bmp|tiff)$/i);

//   useEffect(() => {
//     const fetchFile = async () => {
//       try {
//         // Use the API route to get a signed URL
//         const response = await fetch(`/api/getfiles?fileKey=${encodeURIComponent(fileKey)}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch file: ${response.statusText}`);
//         }
        
//         const data = await response.json();
        
//         if (data.url) {
//           setFileUrl(data.url);
//         } else {
//           throw new Error('No URL returned from the server');
//         }
//       } catch (error) {
//         console.error("Error loading file:", error);
//         setError(error instanceof Error ? error.message : 'Unknown error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFile();
//   }, [fileKey]);

//   if (loading) {
//     return <p className="text-gray-500">Loading file...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">Error: {error}</p>;
//   }

//   if (!fileUrl) {
//     return <p className="text-gray-500">File not available</p>;
//   }

//   return (
//     <div className="flex flex-col items-center gap-4 mt-4">
//       {/* Display image preview if it's an image */}
//       {isImage && (
//         <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-md">
//           <img 
//             src={fileUrl} 
//             alt="File preview" 
//             className="max-w-full h-auto object-contain"
//             style={{ maxHeight: '300px' }}
//           />
//         </div>
//       )}
      
    
//       <a
//         href={fileUrl}
//         download
//         className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//         </svg>
//         Download File
//       </a>
//     </div>
//   );
// }























'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export function FileS3({ fileKey, fileType }: { fileKey: string, fileType?: string }) {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const isImage = fileType?.startsWith('image/') || 
    fileKey.match(/\.(jpeg|jpg|gif|png|webp|svg|bmp|tiff)$/i);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch(`/api/getfiles?fileKey=${encodeURIComponent(fileKey)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.url) {
          setFileUrl(data.url);
        } else {
          throw new Error('No URL returned from the server');
        }
      } catch (error) {
        console.error("Error loading file:", error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [fileKey]);

  const handleDownload = async () => {
    if (!fileUrl) return;
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error(`Failed to download file: ${response.statusText}`);

      const blob = await response.blob(); 
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileKey.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();

      
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading file...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!fileUrl) {
    return <p className="text-gray-500">File not available</p>;
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      {isImage && (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-md">
          <Image 
            src={fileUrl} 
            alt="File preview" 
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: '300px' }}
            width={500} 
            height={300} 
          />
        </div>
      )}
      
      {/* Download button */}
      <button
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download File
      </button>
    </div>
  );
}
