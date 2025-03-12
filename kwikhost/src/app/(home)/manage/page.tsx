'use client'

import ProjectsList from '@/components/ux/ProjectsList'
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ManagePage = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  
  useEffect(() => {
    console.log('session', session);
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);


   if (status === 'loading') {
    return <div>Loading...</div>;
  }


  return (
    <>
    <div className=' p-8 mt-0'>
      <h1 className='text-4xl'>My Space </h1>
      <ProjectsList/>
    </div>
    </>
  )
}

export default ManagePage
