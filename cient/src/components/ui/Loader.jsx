import { Loader2Icon } from 'lucide-react';

const Loader = () => {
  return (
    <div
    id='loader'
    className='flex min-h-screen w-full items-center justify-center bg-cream-100 dark:bg-night-950'>
      <Loader2Icon
      className='size-16 animate-spin text-coffee-700 sm:size-24 dark:text-sage-300' />
    </div>
  )
}

export default Loader
