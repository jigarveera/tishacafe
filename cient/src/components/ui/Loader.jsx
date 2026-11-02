import React from 'react'
import { Loader2Icon } from 'lucide-react';

const Loader = () => {
  return (
    <div
    id='loader'
    className='w-full h-screen flex justify-center items-center bg-gray-100'>
      <Loader2Icon
      className='size-16 sm:size-24 text-gray-800 animate-spin' />
    </div>
  )
}

export default Loader
