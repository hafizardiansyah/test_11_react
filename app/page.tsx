import ListCard from '@/components/list-card';
import { IconDotsVertical, IconSearch } from '@tabler/icons-react';

export default function Home() {
  return (
    <main className='overflow-y-auto flex flex-col'>
      <div className='h-10 bg-red-500 flex justify-end p-2 gap-5'>
        <IconSearch />
        <IconDotsVertical />
      </div>
      <ListCard />
    </main>
  );
}
