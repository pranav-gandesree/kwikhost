'use client';

import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import {  Upload } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from '../ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { NavigationMenuDemo } from './Navigation';



const HomeNavbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700 bg-zinc-900/30 backdrop-blur-md shadow-lg rounded-xl m-4">
    
       <div className="flex items-center gap-4">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">kwikhost</span>

          {/* <NavigationMenuDemo/> */}

     
        </div>

      <ul className="flex flex-row gap-6 items-center text-base font-medium text-zinc-400">
        
      <li className="cursor-pointer">

       <HoverCard >
            <HoverCardTrigger>
              <Badge variant="secondary" className='text-md'>Free Plan</Badge>
            </HoverCardTrigger>

            <HoverCardContent>
              You are currently under free plan which supports only for 2 projects!
            </HoverCardContent>
    </HoverCard>
       </li>

       <li className='cursor-pointer'>
          <DropdownMenu>
              <DropdownMenuTrigger>
                    <Avatar>
                    <AvatarImage src={session?.user?.image || ''} />
                    <AvatarFallback>{session?.user?.name}</AvatarFallback>
                  </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer' onClick={() => signOut()}>Logout</DropdownMenuItem>
                {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
               
              </DropdownMenuContent>
        </DropdownMenu>

       </li>
        
       
      
      </ul>
    </div>
  );
};

export default HomeNavbar;




