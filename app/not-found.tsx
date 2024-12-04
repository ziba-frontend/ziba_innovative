import Image from 'next/image'
import React from 'react'
import NotFoundImage from "@/public/svgs/notfound.svg"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] container gap-6 py-14'>

      <Image src={NotFoundImage} alt='not found' />
      <p className="text-center md:w-3/4 xl:w-[40%] text-content">The page cannot be found. The requested 
      URL was not found on this server.</p>
      <Link href="/">
      <Button className='bg-submain rounded-full p-6'>Go Back Home</Button></Link>
    </div>
  )
}

export default NotFound
