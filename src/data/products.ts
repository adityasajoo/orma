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
    mainImage: '/images/top.png',
    hoverImage: '/images/45391bb5-06df-4607-a795-7ae2860fead7.png',

  },
  {
    id: 2,
    name: 'Flared Pant',
    price: 'INR 22,000',
    slug: 'flared-pant',
    mainImage: '/images/pant.png',
    hoverImage: '/images/5824c5a2-c7aa-49f8-a7b2-cb3d08e48258.png',

  },
  {
    id: 3,
    name: 'Rift Skirt',
    price: 'INR 18,000',
    slug: 'rift-skirt',
    mainImage: '/images/skirt.png',
    hoverImage: '/images/0d046df7-d859-48fb-8da4-3e46ed6a015f.png',
  },
  {
    id: 4,
    name: 'Rorschach Cropped Jacket',
    price: 'INR 20,000',
    slug: 'rorschach-cropped-jacket',
    mainImage: '/images/jacket.png',
    hoverImage: '/images/5e9a58ef-9472-43ca-b091-eccd77877cdc.png',

  },
  {
    id: 5,
    name: 'Fragment Corset',
    price: 'INR 25,000',
    slug: 'fragment-corset',
    mainImage: '/images/corset.png',
    hoverImage: '/images/0a47c57d-3c01-4b8d-923a-203df4bcc94f.png',

  },
];
