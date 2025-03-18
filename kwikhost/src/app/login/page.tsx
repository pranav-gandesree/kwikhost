"use client"

import GoogleSignInButton from '@/components/ux/GoogleSigninButton';
import { Upload } from 'lucide-react';
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import upload from "../../public/upload.svg"
import Image from 'next/image';

const LoginPage = () => {

  const {data: session} = useSession();

  if(session){
    redirect("/manage")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] flex justify-center items-center px-4">

      {/* Flex Container */}
      <div className="flex items-center gap-16 max-w-5xl w-full">

        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <Image 
            src={upload} 
            alt='upload-image' 
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right Side - Login */}
        <div className="flex-1 bg-black backdrop-blur-lg shadow-lg rounded-3xl p-10 border border-white/20">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">kwikhost</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to <span className="text-[#d96ce7]">KwikHost</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base mb-8">
            Upload, share, and manage your files with custom domains.
          </p>

          {/* Sign-In Button */}
          <GoogleSignInButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
              className="mr-2"
            >
              <path
                fill="#4285F4"
                d="M24 20v8h11.8c-.8 4.8-5.1 8-11.8 8-7.3 0-12-6.5-12-13S16.7 10 24 10c3.4 0 6.2 1.2 8.5 3.1l5.9-5.9C34.7 3 29.6 1 24 1 11.9 1 2 10.9 2 24s9.9 23 22 23c11.7 0 21.4-8.2 21.4-22.6 0-1.5-.2-2.8-.4-4H24z"
              />
            </svg>
            Sign in with Google
          </GoogleSignInButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
