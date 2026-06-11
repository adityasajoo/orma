import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanityClient';
import { SanityProduct } from '@/types/sanity';
import { urlFor } from '@/lib/image';

const LANDING_SLUGS = [
  'fragment-corset',
  'rorschach-cropped-jacket',
  'rift-skirt',
];

async function getLandingProducts(): Promise<SanityProduct[]> {
  return client.fetch(`*[_type == "product" && slug.current in $slugs]`, {
    slugs: LANDING_SLUGS,
  });
}

export default async function ProductGrid() {
  const rawProducts = await getLandingProducts();

  // preserve the order defined in LANDING_SLUGS
  const products = LANDING_SLUGS.map(slug =>
    rawProducts.find(p => p.slug.current === slug),
  ).filter(Boolean) as SanityProduct[];

  return (
    <section className='bg-white py-6 px-6'>
      <div className='hidden md:grid md:grid-cols-3 gap-4'>
        {products.map(product => (
          <ProductLink key={product._id} product={product} sizes='33vw' />
        ))}
      </div>

      <div className='md:hidden flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <ProductLink product={products[0]} sizes='50vw' />
          <ProductLink product={products[1]} sizes='50vw' />
        </div>
        <div className='flex justify-center'>
          <div className='w-[60%]'>
            <ProductLink product={products[2]} sizes='60vw' />
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
  product: SanityProduct;
  sizes: string;
}) {
  return (
    <Link href={`/products/${product.slug.current}`} className='group block'>
      <div className='relative aspect-3/4 overflow-hidden'>
        <Image
          src={urlFor(product.mainImage)}
          alt={product.name}
          fill
          className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
          sizes={sizes}
        />
      </div>
    </Link>
  );
}
