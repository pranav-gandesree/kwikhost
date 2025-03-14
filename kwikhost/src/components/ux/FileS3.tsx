
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

    
  // const isPdf = fileType === 'application/pdf' || fileKey.endsWith('.pdf');


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

      

</div>
        
    
  );
}
