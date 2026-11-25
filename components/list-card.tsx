'use client';
import { LIST_DATA } from '@/constants/list-data';
import { IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface ListCardProps {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}
export default function ListCard() {
  const [selected, setSelected] = useState<number[]>([]);
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 flex-1'>
      {LIST_DATA?.map((item, index) => {
        return (
          <Link
            href={`/detail/${item.id}`}
            className='flex flex-col h-75'
            key={index}
          >
            <div className='relative flex-1 w-full overflow-hidden'>
              <Image
                alt={'image' + index}
                src={item.imageUrl}
                className='object-cover'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <div className='flex justify-between items-center px-2'>
              <div className='shrink-0 flex flex-col pt-2'>
                <span>{item.title}</span>
                <span className='text-sm'>{item.subtitle}</span>
              </div>
              <IconStar
                className={`shrink-0 ${
                  selected.includes(item.id) ? 'text-yellow-500' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelected(
                    selected.includes(item.id)
                      ? selected.filter((id) => id !== item.id)
                      : [...selected, item.id]
                  );
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
