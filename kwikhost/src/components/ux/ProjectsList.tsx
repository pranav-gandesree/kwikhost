'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { FileUpload } from './FileUpload';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const ProjectsList = () => {
  const [open, setOpen] = useState(false);
  const {data: session} = useSession();
  

  // const handleFileUpload = async (file: File, subdomain: string) => {

  //   subdomain += '.kwikhost.app';

  //   const response =await axios.post('/api/upload', {
  //     userId: session?.user.id,
  //     domainName: subdomain,  
  //     fileType: file.type,  
  //   });

  //   console.log('Uploaded file:', file, subdomain);
  //   console.log('Uploaded subdomain:', response);
  //   setOpen(false); 
  // };




  const handleFileUpload = async (file: File, subdomain: string) => {
    try {
      if (!session?.user?.id) {
        console.error("User is not authenticated");
        return;
      }
  
      subdomain += ".kwikhost.app";
  
      const response = await axios.post("/api/upload", {
        userId: session.user.id,
        domainName: subdomain,
        fileType: file.type,
      });
  
      console.log("Upload URL:", response.data.presignedUrl);
  
      // Now, you can upload the file to the presigned URL
      await axios.put(response.data.presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
  
      console.log("File uploaded successfully");
    } catch (error: any) {
      console.error("File upload failed:", error.response?.data || error.message);
    }
  };


  
  
  return (
    <>
      <div className='flex justify-between items-center border p-4 m-4 rounded-lg mt-10'>
        <h2 className='text-2xl font-semibold'>Live Projects</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Upload</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl p-4">
            <FileUpload onFileUpload={handleFileUpload} />
          </DialogContent>
        </Dialog>
        
      </div>
    </>
  );
};

export default ProjectsList;
