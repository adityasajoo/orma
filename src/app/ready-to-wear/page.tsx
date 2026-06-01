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
              src='/images/Untitled-18.png'
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
          className='text-center text-[11px] tracking-[0.35em] text-black mb-10'
          style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>
          READY TO WEAR // ALL
        </h1>

        {/* Product grid */}
        <div className='px-8 grid grid-cols-3 gap-x-5 gap-y-12'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
