'use client'

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MySpace from '@/components/ux/MySpace';
import Spinner from '@/components/ux/Spinner';

const ManagePage = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  
  useEffect(() => {
    console.log('session', session);
    if (status === 'unauthenticated') {
      router.push('/');
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
