import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import { products } from '@/data/products';

export default function ReadyToWearPage() {
  return (
    <>
      <Navbar dark />

      <main className='pt-[68px] pb-20'>
        {/* Collection banner */}
        <div className='px-8 mb-10'>
          <div className='relative w-full h-52 overflow-hidden'>
            <Image
              src='/images/latest/Untitled-18_2026-06-02_12_46_36.832554.webp'
              alt='Ready to Wear collection banner'
              fill
              className='object-cover object-top'
              priority
              sizes='100vw'
            />
          </div>
        </div>

        {/* Section heading */}
        <h1
          className='text-center text-[16px] tracking-[0.35em] text-black mb-10'
          style={{ fontFamily: 'var(--font-body)', padding: '10px' }}>
          READY TO WEAR // ALL
        </h1>

        {/* Product grid */}
        <div className='px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-8 md:gap-y-12'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
