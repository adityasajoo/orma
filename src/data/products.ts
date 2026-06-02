export interface Product {
  id: number;
  name: string;
  price: string;
  slug: string;
  mainImage: string;
  hoverImage: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Double Collar Top',
    price: 'INR 12,000',
    slug: 'double-collar-top',
    mainImage: '/images/new-scaled/top.webp',
    hoverImage: '/images/new-scaled/top2.webp',

  },
  {
    id: 2,
    name: 'Flared Pant',
    price: 'INR 22,000',
    slug: 'flared-pant',
    mainImage: '/images/new-scaled/pant.webp',
    hoverImage: '/images/new-scaled/pant3.webp',

  },
  {
    id: 3,
    name: 'Rift Skirt',
    price: 'INR 18,000',
    slug: 'rift-skirt',
    mainImage: '/images/new-scaled/skirt.webp',
    hoverImage: '/images/new-scaled/0d046df7-d859-48fb-8da4-3e46ed6a015f_2026-06-02_12_46_18.777011.webp',
  },
  {
    id: 4,
    name: 'Rorschach Cropped Jacket',
    price: 'INR 20,000',
    slug: 'rorschach-cropped-jacket',
    mainImage: '/images/new-scaled/jacket.webp',
    hoverImage: '/images/new-scaled/jacket2.webp',

  },
  {
    id: 5,
    name: 'Fragment Corset',
    price: 'INR 25,000',
    slug: 'fragment-corset',
    mainImage: '/images/new-scaled/corset.webp',
    hoverImage: '/images/new-scaled/0a47c57d-3c01-4b8d-923a-203df4bcc94f_2026-06-02_12_46_17.240638.webp',

  },
];
