import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { products, ProductCategory } from '@/data/products';

const categoryLabels: Record<ProductCategory, string> = {
  tops: 'TOPS',
  pants: 'PANTS',
  skirts: 'SKIRTS',
  jackets: 'JACKETS',
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!(category in categoryLabels)) notFound();

  const cat = category as ProductCategory;
  const filtered = products.filter(p => p.category === cat);

  return (
    <>
      <Navbar dark />

      <main className='pt-[68px] pb-20'>
        {/* Collection banner */}
        <div className='px-8 mb-10'>
          <div className='relative w-full h-52 overflow-hidden'>
            <Image
              src='/images/Untitled-18.png'
              alt='Ready to Wear collection banner'
              fill
              className='object-cover object-top'
              priority
              sizes='100vw'
            />
          </div>
        </div>{' '}
        s{/* Section heading */}
        <p
          className='text-center text-[16px] tracking-[0.35em] text-black mb-10'
          style={{ fontFamily: 'var(--font-body)', padding: '10px' }}>
          READY TO WEAR // {categoryLabels[cat]}
        </p>
        {/* Product grid */}
        <div className='px-8 grid grid-cols-3 gap-x-5 gap-y-12'>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
