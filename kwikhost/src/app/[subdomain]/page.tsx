
'use client';

import { GetFiles } from "@/actions/getFiles";
import { GetDomainByName } from "@/actions/getProjects";
import { FileS3 } from "@/components/ux/FileS3";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { useParams } from 'next/navigation';
import Loader from "@/components/ux/Loader";


interface Domain {
  id: string;
  domain: string;
  updatedAt: Date;
  createdAt: Date;
  userId: string;
}

interface File {
  id: string;
  domainId: string;
  file_type: string;
  file_url: string;
  updatedAt: Date;
  createdAt: Date;
}


export default function SubdomainPage() {
  const { subdomain } = useParams() as { subdomain: string };

  const { status } = useSession();
  const [domainDetails, setDomainDetails] = useState<Domain[] | null>(null);
  const [fileDetails, setFileDetails] = useState<File[] | null>(null);

  const getDomain = async () => {
    try {
      if (subdomain) {
        const data = await GetDomainByName(subdomain);
        setDomainDetails(data);
        console.log('Subdomain in page.tsco', subdomain);
        // console.log('SubdomainPage: Fetched domain details:', data);
      }
    } catch (error) { 
      console.error('Error fetching domain details:', error);
    }
  };

  const getFiles = async () => {
    try {
      if (domainDetails?.[0]?.id) {        
        const data = await GetFiles(domainDetails[0].id);
        setFileDetails(data);
        // console.log("File URL:", fileDetails?.[0]?.file_url);
        console.log('SubdomainPage: Fetched files:', data);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  useEffect(() => {
      getDomain();
  }, [subdomain]);

  useEffect(() => {
    if (domainDetails) {
      getFiles();
    }
  }, [domainDetails]);

  if (status === 'loading') {
    return <Loader/>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      {fileDetails?.[0]?.file_url ? (
        <FileS3 
          fileKey={fileDetails[0].file_url} 
          fileType={fileDetails[0].file_type} 
        />
      ) : (
        <p className="text-gray-500 mt-4">No file available for download.</p>
      )}


    </div>
  );
}











// 'use client'


// import { useParams } from 'next/navigation';

// export default function SubdomainPage() {
//   const { subdomain } = useParams();

//   console.log(subdomain)

//   return (
//     <div>
//       <h1>Subdomain: {subdomain}</h1>
//       <p>This is the content for the subdomain {subdomain}.</p>
//     </div>
//   );
// }
