'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { FileUpload } from './FileUpload';

const ProjectsList = () => {
  const [open, setOpen] = useState(false);

  const handleFileUpload = (file: File) => {
    console.log('Uploaded file:', file);
    setOpen(false); 
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
