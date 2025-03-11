'use client';

import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HomeNavbar = () => {
  const { data: session } = useSession();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <div className="flex justify-between items-center border-b shadow-md px-6 py-4 m-4">
      
      <h2 className="text-3xl font-semibold text-gray-200 cursor-pointer">NanoHost</h2>
     
      <ul className="flex flex-row gap-6 items-center text-lg text-gray-300">
        <li className="cursor-pointer">Free Plan</li>
        <li className=" cursor-pointer">Upgrade</li>
        <li className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Image
              src={session?.user?.image || '/default-image.png'}
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full border border-gray-300"
            />
            {isDropdownOpen ? (
              <ChevronUp className="text-gray-500" />
            ) : (
              <ChevronDown className="text-gray-500" />
            )}
          </div>

      
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-black shadow-md rounded-xl border border-gray-200 z-50">
              <li
                onClick={() => signOut()}
                className="px-4 py-3 hover:text-red-600 cursor-pointer rounded-t-xl"
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
