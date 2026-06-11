import { getProduct } from '@/lib/api/getProduct';
import { notFound } from 'next/navigation';
import ProductDetail from './ProductDetail';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
