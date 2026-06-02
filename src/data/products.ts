export type ProductCategory = 'tops' | 'pants' | 'skirts' | 'jackets';

export interface Product {
  id: number;
  name: string;
  price: string;
  slug: string;
  category: ProductCategory;
  mainImage: string;
  hoverImage: string;
  gallery: string[];
}

const base = '/images/latest';

export const products: Product[] = [
  {
    id: 1,
    name: 'Double Collar Top',
    price: 'INR 12,000',
    slug: 'double-collar-top',
    category: 'tops',
    mainImage: '/images/new-scaled/top.webp',
    hoverImage: '/images/new-scaled/top2.webp',
    gallery: [
      `${base}/double-collar-top/04b88d54-9c44-4fb3-8d38-974fb47a83a4.png`,
      `${base}/double-collar-top/45391bb5-06df-4607-a795-7ae2860fead7.png`,
      `${base}/double-collar-top/59ffddca-708b-4d74-b11e-4cb446a98be6.png`,
      `${base}/double-collar-top/83f2a259-675c-44a5-a7d7-b2a2353dbf08.png`,
      `${base}/double-collar-top/8e64995d-a389-4130-9804-b0b79864445a.png`,
    ],
  },
  {
    id: 2,
    name: 'Flared Pant',
    price: 'INR 22,000',
    slug: 'flared-pant',
    category: 'pants',
    mainImage: '/images/new-scaled/pant.webp',
    hoverImage: '/images/new-scaled/pant3.webp',
    gallery: [
      `${base}/flared-pant/030d6427-a478-47c1-9387-5c22d0b52e4e.png`,
      `${base}/flared-pant/5ad5d9a5-1520-4cd8-a2a8-78cdd8d1245e.png`,
      `${base}/flared-pant/61db323d-d98a-40be-b06e-e84dc70208a8-1.png`,
      `${base}/flared-pant/61ddadda-35ab-42fe-90b9-ae19ef0b7d66.png`,
      `${base}/flared-pant/6dfecd06-93f1-4e98-9d68-57d71730d7bb.png`,
      `${base}/flared-pant/7f8e7dd3-8801-4435-b994-76ce7577e306.png`,
    ],
  },
  {
    id: 3,
    name: 'Rift Skirt',
    price: 'INR 18,000',
    slug: 'rift-skirt',
    category: 'skirts',
    mainImage: '/images/new-scaled/skirt.webp',
    hoverImage: '/images/new-scaled/0d046df7-d859-48fb-8da4-3e46ed6a015f_2026-06-02_12_46_18.777011.webp',
    gallery: [
      `${base}/rift-skirt/0d046df7-d859-48fb-8da4-3e46ed6a015f.png`,
      `${base}/rift-skirt/0f13cb43-796d-42e2-954f-8d973b16c4ed.png`,
      `${base}/rift-skirt/48bde8f1-3a46-4fbb-903c-587a8b903d35.png`,
      `${base}/rift-skirt/c79f388b-ad4a-497d-9ded-789c5ae61716.png`,
      `${base}/rift-skirt/d5c1855e-e301-4fb8-a0c2-73c18a074124.png`,
      `${base}/rift-skirt/d903ff5f-794d-4271-a7bd-5f55c7724bfe.png`,
    ],
  },
  {
    id: 4,
    name: 'Rorschach Cropped Jacket',
    price: 'INR 20,000',
    slug: 'rorschach-cropped-jacket',
    category: 'jackets',
    mainImage: '/images/new-scaled/jacket.webp',
    hoverImage: '/images/new-scaled/jacket2.webp',
    gallery: [
      `${base}/rorschach-cropped-jacket/0ee3a3c1-e3d8-4fd8-8d87-a722cfbfeaa9.png`,
      `${base}/rorschach-cropped-jacket/532be98b-ebd9-4d9a-9a2c-6e92f376d159.png`,
      `${base}/rorschach-cropped-jacket/5e9a58ef-9472-43ca-b091-eccd77877cdc.png`,
      `${base}/rorschach-cropped-jacket/b02d49ee-d6f1-4f33-a29a-4fb85e0450ba.png`,
      `${base}/rorschach-cropped-jacket/df925335-e531-43ee-b6a7-56ec9fe0bc49.png`,
    ],
  },
  {
    id: 5,
    name: 'Fragment Corset',
    price: 'INR 25,000',
    slug: 'fragment-corset',
    category: 'tops',
    mainImage: '/images/new-scaled/corset.webp',
    hoverImage: '/images/new-scaled/0a47c57d-3c01-4b8d-923a-203df4bcc94f_2026-06-02_12_46_17.240638.webp',
    gallery: [
      `${base}/fragment-corset/1821762d-fa12-45e6-a098-350e2f2a0842.png`,
      `${base}/fragment-corset/2afe4612-f07e-46a8-bf42-585117e70e8a.png`,
      `${base}/fragment-corset/2f64367c-512e-40c5-b91d-97a696aa1199.png`,
      `${base}/fragment-corset/86f3e0e7-487a-429f-b535-808ff75d0ac1.png`,
    ],
  },
];
