import React from 'react'

const HomeNavbar = () => {
  return (
    <div className='flex justify-between border m-4 p-4'>
        <h2 className='text-3xl'>NanoHost</h2>
      <ul className='flex flex-row gap-4 text-xl'>
        <li>api</li>
        <li>docs</li>
        <li>pricing</li>
      </ul>
    </div>
  )
}

export default HomeNavbar
