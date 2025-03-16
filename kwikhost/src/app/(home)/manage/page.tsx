'use client'

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import MySpace from '@/components/ux/MySpace';
import Spinner from '@/components/ux/Spinner';

const ManagePage = () => {
  const { status, data: session } = useSession();
  
  useEffect(() => {
    // console.log('session', session);
    if (status === 'unauthenticated') {
      redirect("/")
    }
  }, [status, session]);


   if (status === 'loading') {
    return <Spinner/>
  }


  return (
    <>
    <div className=' p-8 mt-0'>
  
      <MySpace/>
    </div>
    </>
  )
}

export default ManagePage
