import Image from 'next/image';

export function AppHeader() {
  return (
    <div className='flex flex-row items-center gap-0.5'>
      <Image 
        src='/logo.png'
        alt='App Logo'
        width={40}
        height={40}
      />

      <div className='text-xl font-black text-amber-400'>
        Quack
      </div>
    </div>
  );
}