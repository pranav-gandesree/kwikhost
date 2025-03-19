'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { FileUpload } from './FileUpload';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import ProjectsList from './ProjectsList';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const MySpace = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();


  if (!session?.user?.id) {
    console.error("User is not authenticated");
    return;
  }

  const handleFileUpload = async (file: File, subdomain: string) => {
    try {

      if (!file) {
        console.error("No file selected");
        alert("Please select a file before uploading.");
        return;
      }
  
      if (!subdomain) {
        console.error("No subdomain provided");
        alert("Please enter a subdomain before uploading.");
        return;
      }

      subdomain = subdomain.toLowerCase();
      
      const response = await axios.post("/api/upload", {
        userId: session.user.id,
        domainName: subdomain,
        fileType: file.type,
      });

      await axios.put(response.data.presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      // console.log("File uploaded successfully");
      toast.success('File uploaded successfully!');
      router.refresh();
      
      setOpen(false);

    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
     catch (error: any) {
      console.error("File upload failed:", error.response?.data || error.message);
      // toast.error(error.response?.data?.message || error.message);
      const errorMessage =
      error.response?.data?.error || "Failed to upload file";
    toast.error(errorMessage);
  
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-6 ml-2">My Space</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform">
              <Upload className="h-5 w-5 mr-2" />
              Upload
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg bg-zinc-800 border border-zinc-700 rounded-xl shadow-lg">
            <FileUpload onFileUpload={handleFileUpload} />
          </DialogContent>
        </Dialog>
      </div>

    
      <ProjectsList userId={session.user.id} />
    </div>
  );
};

export default MySpace;
