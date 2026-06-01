import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetail from './ProductDetail';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
