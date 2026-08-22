import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

function EmptyWorkspace() {
    return (
        <div className='flex flex-col mt-10 items-center justify-center'>
            <Image src={'/folder.png'} alt={'folder'} width={80} height={80} />
            <h2 className='font-medium text-2xl'>No Repository Connected</h2>
            <p className='text-center text-2xl mt-5 mb-4'>Connect your Github account and add a repository to generate test cases</p>

            <Button className='mt-5'><Link className='h-4 w-4 mr-2' />Connect Repo</Button>
        </div>
    )
}

export default EmptyWorkspace