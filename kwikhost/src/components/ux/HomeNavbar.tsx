

'use client';

import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Upload } from 'lucide-react';

const HomeNavbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700 bg-zinc-900/30 backdrop-blur-md shadow-lg rounded-xl m-4">
    
       <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">kwikhost</span>
        </div>

      <ul className="flex flex-row gap-6 items-center text-base font-medium text-zinc-400">

       
        <li className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Image
              src={session?.user?.image || ''}
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full border border-zinc-700 shadow-md"
            />
            {isDropdownOpen ? (
              <ChevronUp className="text-zinc-500" />
            ) : (
              <ChevronDown className="text-zinc-500" />
            )}
          </div>

          {isDropdownOpen && (
            <ul
              className="absolute right-0 mt-2 w-40 bg-zinc-800/40 backdrop-blur-lg shadow-xl border border-zinc-700 rounded-xl overflow-hidden transition-all duration-300"
            >
              <li
                onClick={() => signOut()}
                className="px-4 py-3 text-zinc-300 hover:bg-zinc-700/50 hover:text-red-400 cursor-pointer transition duration-200"
              >
                Logout
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default HomeNavbar;




