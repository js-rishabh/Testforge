import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='flex w-full justify-between p-4'>
      <Image src={'/logo.svg'} alt='logo' width={75} height={75} />

      <ul className='flex gap-8 text-xl'>
        <li className='hover:text-gray-500 transition-all cursor-pointer'>Workspace</li>
        <li className='hover:text-gray-500 transition-all cursor-pointer'>Pricing</li>
        <li className='hover:text-gray-500 transition-all cursor-pointer'>Support</li>
      </ul>

      <UserButton />
    </div>
  )
}

export default WorkspaceHeader