import Image from 'next/image';
import Link from 'next/link';

const landingProducts = [
  {
    slug: 'double-collar-top',
    image: '/images/corset.png',
    name: 'Fragment Corset',
  },
  {
    slug: 'rorschach-cropped-jacket',
    image: '/images/jacket.png',
    name: 'Rorschach Cropped Jacket',
  },
  { slug: 'rift-skirt', image: '/images/skirt.png', name: 'Rift Skirt' },
];

export default function ProductGrid() {
  return (
    <section className='bg-white py-6 px-6'>
      <div className='grid grid-cols-3 gap-4'>
        {landingProducts.map(product => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className='group block'>
            <div className='relative aspect-[3/4] bg-[#f0f0f0] overflow-hidden'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain p-8 transition-transform duration-500 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
