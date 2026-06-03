import Image from 'next/image';
import Link from 'next/link';

const landingProducts = [
  {
    slug: 'fragment-corset',
    image: '/images-final/fragment corset/yu.jpg',
    name: 'Fragment Corset',
  },
  {
    slug: 'rorschach-cropped-jacket',
    image:
      '/images-final/rorschach cropped jacket/b02d49ee-d6f1-4f33-a29a-4fb85e0450ba Firefly Upscaler 4x scale.jpg',
    name: 'Rorschach Cropped Jacket',
  },
  {
    slug: 'rift-skirt',
    image:
      '/images-final/rift skirt/c79f388b-ad4a-497d-9ded-789c5ae61716 Firefly Upscaler 4x scale.jpg',
    name: 'Rift Skirt',
  },
];

export default function ProductGrid() {
  return (
    <section className='bg-white py-6 px-6'>
      {/* Desktop: 3-column. Mobile: 2-up top, 1 centered bottom */}
      <div className='hidden md:grid md:grid-cols-3 gap-4'>
        {landingProducts.map(product => (
          <ProductLink key={product.slug} product={product} sizes='33vw' />
        ))}
      </div>

      <div className='md:hidden flex flex-col gap-4'>
        {/* Row 1: two side by side */}
        <div className='grid grid-cols-2 gap-4'>
          <ProductLink product={landingProducts[0]} sizes='50vw' />
          <ProductLink product={landingProducts[1]} sizes='50vw' />
        </div>
        {/* Row 2: single centered at ~60% width */}
        <div className='flex justify-center'>
          <div className='w-[60%]'>
            <ProductLink product={landingProducts[2]} sizes='60vw' />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductLink({
  product,
  sizes,
}: {
  product: (typeof landingProducts)[number];
  sizes: string;
}) {
  return (
    <Link href={`/products/${product.slug}`} className='group block'>
      <div className='relative aspect-3/4 overflow-hidden'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
          sizes={sizes}
        />
      </div>
    </Link>
  );
}
