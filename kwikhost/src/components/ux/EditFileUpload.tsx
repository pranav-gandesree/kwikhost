// 'use client';

// import React, { useEffect, useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Upload, X } from 'lucide-react';
// import { toast } from 'sonner';
// import { GetDomainByName } from '@/actions/getProjects';
// import axios from 'axios';

// interface EditFileUploadProps {
//   domainName: string;
//   onFileUpload?: (file: File, subdomain: string) => void;
// }



// export const EditFileUpload: React.FC<EditFileUploadProps> = ({ domainName, onFileUpload }) => {
//   const [preview, setPreview] = useState<string | null>(null);
//   const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
//   const [fileName, setFileName] = useState<string | null>(null);
//   const [subdomain, setSubdomain] = useState<string>('');
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // Fetch existing file and subdomain
//   useEffect(() => {
//     const fetchDomain = async () => {
//       try {
//         const res = await GetDomainByName(domainName);
//         console.log("domain name from edit page",res[0]?.domain)
//         setSubdomain(res[0]?.domain)
//       } catch (error) {
//         toast.error('Failed to load existing data');
//         console.error(error);
//       }
//     };

//     fetchDomain();

//     const fetchFiles = async () =>{
//         try{
//             const res = await axios.get(`/api/files?fileKey=${encodeURIComponent(domainName)}`);
//             console.log("files in edit domain", res)
//             setFileName(res?.data.url)

//         }catch (error) {
//         toast.error('Failed to load existing data');
//         console.error(error);
//       }
//     }

//     fetchFiles();
//   }, [domainName]);

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     const file = acceptedFiles[0];
//     if (!file) return;

//     setFileName(file.name);
//     setSelectedFile(file);
//     setUploadStatus('success');

//     const validTypes = [
//       'application/pdf',
//       'image/jpeg',
//       'image/jpg',
//       'image/png',
//       'image/gif',
//       'image/webp',
//       'image/svg+xml',
//       'text/plain',
//       'application/vnd.ms-powerpoint',
//       'application/vnd.ms-excel',
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//       'application/msword',
//       'application/json',
//       'text/html',
//       'video/mp4',
//       'video/mpeg',
//       'audio/mpeg',
//       'application/x-zip-compressed',
//       'application/zip'
//     ];

//     if (!validTypes.includes(file.type)) {
//       toast.error('Invalid file type. Please upload a valid file.');
//       resetUpload();
//       return;
//     }

//     if (file.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onloadend = () => setPreview(reader.result as string);
//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null);
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     multiple: false,
//   });

//   const resetUpload = () => {
//     setPreview(null);
//     setFileName(null);
//     setUploadStatus('idle');
//     setSelectedFile(null);
//   };

//   const handlePublish = async () => {
//     if (!selectedFile || !subdomain.trim()) return;

//     setUploadStatus('uploading');

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500)); // Mock API call
//       onFileUpload?.(selectedFile, subdomain);
//       setUploadStatus('success');
//       toast.success('File published successfully!');
//     } catch (error) {
//       setUploadStatus('error');
//       console.error('Error publishing file:', error);
//       toast.error('Failed to publish file');
//     }
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto p-4 bg-black rounded-lg shadow-xl">
//       {/* Subdomain Input */}
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           placeholder="link-name"
//           value={subdomain}
//           onChange={(e) => setSubdomain(e.target.value)}
//           className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-lg outline-none"
//         />
//         <span className="bg-gray-700 text-white px-4 py-2 rounded-r-lg select-none">
//           .kwikhost.xyz
//         </span>
//       </div>

//       {/* Uploaded File Info */}
//       {fileName && (
//         <div className="mb-2 flex items-center justify-center text-sm text-gray-400">
//           Uploaded file:
//           <span className="font-medium text-white ml-1">{fileName}</span>
//           <button
//             onClick={() => resetUpload()}
//             className="ml-2 text-gray-400 hover:text-red-500 transition"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>
//       )}

//       {/* Dropzone */}
//       {/* <div
//         {...getRootProps()}
//         className={`relative transition-all duration-300 ease-in-out
//           ${isDragActive ? 'border-blue-500 scale-105' : 'border-gray-700'}
//           ${uploadStatus === 'success' ? 'border-green-500' : ''}
//           ${uploadStatus === 'error' ? 'border-red-500' : ''}
//           border-2 border-dashed rounded-xl p-8 bg-gray-900 cursor-pointer
//           hover:border-blue-500 hover:bg-gray-800
//           flex flex-col items-center justify-center min-h-[200px]`}
//       >
//         <input {...getInputProps()} />

       
//       </div> */}




// <div
//   {...getRootProps()}
//   className={`relative transition-all duration-300 ease-in-out
//     ${isDragActive ? 'border-blue-500 scale-105' : 'border-gray-700'}
//     ${uploadStatus === 'success' ? 'border-green-500' : ''}
//     ${uploadStatus === 'error' ? 'border-red-500' : ''}
//     border-2 border-dashed rounded-xl p-8 bg-gray-900 cursor-pointer
//     hover:border-blue-500 hover:bg-gray-800
//     flex flex-col items-center justify-center min-h-[200px]`}
// >
//   <input {...getInputProps()} />


// </div>



//       {/* Publish Button */}
//       <button
//         onClick={handlePublish}
//         disabled={!fileName || uploadStatus === 'uploading' || !subdomain.trim()}
//         className={`w-full mt-6 px-4 py-3 text-white font-medium rounded-lg transition ${
//           !fileName || uploadStatus === 'uploading' || !subdomain.trim()
//             ? 'bg-gray-700 cursor-not-allowed'
//             : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//       >
//         {uploadStatus === 'uploading' ? 'Publishing...' : 'PUBLISH'}
//       </button>
//     </div>
//   );
// };
