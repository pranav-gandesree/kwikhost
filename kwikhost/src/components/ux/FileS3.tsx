
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loader from './Loader';


export function FileS3({ fileKey, fileType }: { fileKey: string; fileType?: string }) {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

    const isImage =
    fileType?.startsWith('image/') ||
    fileKey.match(/\.(jpeg|jpg|gif|png|webp|svg|bmp|tiff)$/i);

    
  const isPdf = fileType === 'application/pdf' || fileKey.endsWith('.pdf');

  const isPPT =
    fileType === 'application/vnd.ms-powerpoint' || fileKey.endsWith('.ppt') ||
    fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ||
    fileKey.endsWith('.pptx');

  const isMp3 = fileType === 'audio/mpeg' || fileKey.endsWith('.mp3')

  const isMp4 = fileType === 'video/mp4' || fileKey.endsWith('.mp4')


  useEffect(() => {
    const fetchFile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/getfiles?fileKey=${encodeURIComponent(fileKey)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const data = await response.json();
        // console.log("file data in filses3 ", data)

        if (data.url) {
          setFileUrl(data.url);
          // console.log("file url in filses3 ", data.url)
        } else {
          throw new Error('No URL returned from the server');
        }
      } catch (error) {
        console.error('Error loading file:', error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [fileKey]);

  

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!fileUrl) {
    return <p className="text-gray-500">File not available</p>;
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4">


      {isImage && fileUrl && (
        <div className="overflow-hidden shadow-md max-w-md">
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

    
{isPdf && fileUrl && (
  <div className="flex justify-center items-center bg-gray-100 min-h-[80vh] ">
    <div className="border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden w-full">
      <embed
        src={fileUrl}
        className="w-full md:w-[800px] h-[500px] md:h-[700px]"
        title="PDF Viewer"
      />

    </div>
  </div>
)}


{isPPT && fileUrl && (
  <div className="flex justify-center items-center bg-gray-100 min-h-[80vh]">
    <iframe
      src={`https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`}
      className="w-full md:w-[800px] h-[500px] md:h-[700px] border-2 border-gray-300 shadow-lg rounded-lg"
      title="PPT Viewer"
    />
  </div>
)}

{isMp3 && fileUrl && 
(
  <audio src={fileUrl} controls autoPlay></audio>

)}




{isMp4 && fileUrl && (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <video
      src={fileUrl}
      controls
      playsInline
      crossOrigin="anonymous"
      className="w-full md:w-[600px] lg:w-[800px] h-auto rounded-lg shadow-lg border-2 border-gray-700"
    />
  </div>
)}





</div>
        
    
  );
}
