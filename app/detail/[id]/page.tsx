import DetailCard from '@/components/detail-card';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  return <DetailCard id={Number(id)} />;
}
