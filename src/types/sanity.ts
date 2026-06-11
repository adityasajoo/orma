import { SanityImageObject } from "@sanity/image-url"

export interface SanityProduct {
    _id: string
    _type: 'product'
    name: string
    price: string
    slug: { current: string }
    category: 'tops' | 'pants' | 'skirts' | 'jackets'
    description: string
    composition: string
    mainImage: SanityImageObject
    hoverImage: SanityImageObject
    gallery: SanityImageObject[]
}