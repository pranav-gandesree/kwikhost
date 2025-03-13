
'use client';

import { GetFiles } from "@/actions/getFiles";
import { GetDomainByName } from "@/actions/getProjects";
import { FileS3 } from "@/components/ux/FileS3";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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



export default function SubdomainPage({ params }: { params: { subdomain: string } }) {
  const { subdomain } = params;
  const { data: session, status } = useSession();
  const [domainDetails, setDomainDetails] = useState<Domain[] | null>(null);
  const [fileDetails, setFileDetails] = useState<File[] | null>(null);

  const getDomain = async () => {
    try {
      if (subdomain && session?.user?.id) {
        const data = await GetDomainByName(subdomain);
        // const data = await GetDomains(session.user.id);
        setDomainDetails(data);
        console.log('Subdomain', subdomain);
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
        // console.log('SubdomainPage: Fetched files:', data);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      getDomain();
    }
  }, [status, subdomain]);

  useEffect(() => {
    if (domainDetails) {
      getFiles();
    }
  }, [domainDetails]);

  if (status === 'loading') {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to {subdomain}.kwikhost.site
      </h1>
      <p className="text-lg text-gray-500 mt-2">
        This is a multi-tenant site for <span className="font-semibold">{subdomain}</span>.
      </p>

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
