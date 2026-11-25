import { LIST_DATA } from '@/constants/list-data';
import { IconArrowLeft, IconStar, IconVolume } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailCard({ id }: { id: number }) {
  const item = LIST_DATA.find((item) => item.id === id); // Replace 1 with the desired id

  if (!item) {
    return null;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-red-500 shrink-0 h-7.5'>
        <Link href='/'>
          <IconArrowLeft />
        </Link>
      </div>
      <div className='relative flex-1 w-full overflow-hidden'>
        <Image
          alt={'image' + id}
          src={item.imageUrl}
          className='object-cover'
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <div className='flex flex-col shrink-0 '>
        <div className='p-10 flex flex-col bg-gray-500'>
          <span className='text-xl'>Large Text</span>
          <span className='text-sm'>Small Text</span>
        </div>
        <div className='p-10 bg-gray-300 flex justify-between items-center text-black'>
          <IconVolume />
          <span className='font-semibold'>{item.title}</span>
          <span className=''>{item.subtitle}</span>
        </div>
      </div>
    </div>
  );
}
