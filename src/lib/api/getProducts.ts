// lib/getProducts.ts
import { SanityProduct } from '@/types/sanity'
import { client } from '../sanityClient'

export async function getProducts(): Promise<SanityProduct[]> {
    return client.fetch(`*[_type == "product"] | order(_updatedAt asc)`)
}