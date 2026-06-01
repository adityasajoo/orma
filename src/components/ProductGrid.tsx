import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Structured Bolero",
    slug: "structured-bolero",
    image: "/images/corset.png",
  },
  {
    id: 2,
    name: "Draped Jacket",
    slug: "draped-jacket",
    image: "/images/jacket.png",
  },
  {
    id: 3,
    name: "Asymmetric Skirt",
    slug: "asymmetric-skirt",
    image: "/images/skirt.png",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-6 px-6">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group block"
          >
            <div className="relative aspect-[3/4] bg-[#f0f0f0] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
