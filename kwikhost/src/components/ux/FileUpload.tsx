

'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface FileUploadProps {
  onFileUpload?: (file: File, subdomain: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
   onFileUpload,
  }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const [subdomain, setSubdomain] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setFileName(file.name);
    setSelectedFile(file);
    setUploadStatus('success');

    const validTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
      'text/plain',
      'application/vnd.ms-powerpoint',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/msword',
      'application/json',
      'text/html',
      'video/mp4',
      'video/mpeg',
      'audio/mpeg', // audio mp3 files
      'application/x-zip-compressed',
      'application/zip',
      'model/stl', // .stl files
      'application/x-blender', // .blend files
      'application/sla',
      'model/vnd.blender'
    ];

    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a valid file.');
      resetUpload();
      return;
    }

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const resetUpload = () => {
    setPreview(null);
    setFileName(null);
    setUploadStatus('idle');
    setSelectedFile(null);
  };

  const handlePublish = async () => {
    if (!selectedFile || !subdomain.trim()) return;

    setUploadStatus('uploading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      onFileUpload?.(selectedFile, subdomain);
      setUploadStatus('success');
    } catch (error) {
      setUploadStatus('error');
      console.log("Error is ", error)
     
    }
  };

  return (

    <div className="w-full max-w-lg mx-auto p-4 bg-black rounded-lg shadow-xl">
      {/* Subdomain Input */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="link-name"
          value={subdomain}
          onChange={(e) => setSubdomain(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-lg outline-none"
        />
        <span className="bg-gray-700 text-white px-4 py-2 rounded-r-lg select-none">
          .kwikhost.xyz
        </span>
      </div>


      {/* {fileName && (
        <div className="mb-2 flex items-center justify-center text-sm text-gray-400">
          Uploaded file: 
          <span className="font-medium text-white ml-1">{fileName}</span>
          <button
            onClick={() => resetUpload()}
            className="ml-2 text-gray-400 hover:text-red-500 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )} */}

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`relative transition-all duration-300 ease-in-out
          ${isDragActive ? 'border-blue-500 scale-105' : 'border-gray-700'}
          ${uploadStatus === 'success' ? 'border-green-500' : ''}
          ${uploadStatus === 'error' ? 'border-red-500' : ''}
          border-2 border-dashed rounded-xl p-8 bg-gray-900 cursor-pointer
          hover:border-blue-500 hover:bg-gray-800
          flex flex-col items-center justify-center min-h-[200px]`}
      >
        <input {...getInputProps()} />

        {uploadStatus === 'success' ? (
          <div className="text-center space-y-4">
            <p className="text-green-500">✅ File uploaded successfully!</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetUpload();
              }}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-white transition"
            >
              Upload Another File
            </button>
          </div>
        ) : uploadStatus === 'uploading' ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto" />
            <p className="text-blue-500">Uploading...</p>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <Upload className={`w-12 h-12 ${isDragActive ? 'text-blue-500' : 'text-gray-500'}`} />
            <p className="text-gray-400">
              {isDragActive ? 'Drop your file here' : 'Drag & drop or click to upload'}
            </p>
            <p className="text-sm text-gray-500">Supported formats: PDF, Images, PPT</p>
          </div>
        )}

        {/* Preview */}
        {preview && uploadStatus !== 'success' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-xl animate-fade-in">
            <Image src={preview} alt="Preview" className="max-h-[80%] max-w-[80%] object-contain rounded" width="100" height="100"/>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetUpload();
              }}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Publish Button */}
      <button
        onClick={handlePublish}
        disabled={!fileName || uploadStatus === 'uploading' || !subdomain.trim()}
        className={`w-full mt-6 px-4 py-3 text-white font-medium rounded-lg transition ${
          !fileName || uploadStatus === 'uploading' || !subdomain.trim()
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {uploadStatus === 'uploading' ? 'Publishing...' : 'PUBLISH'}
      </button>
    </div>

  );
};
