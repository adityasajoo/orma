import { SanityProduct } from "@/types/sanity";
import { client } from "../sanityClient";

export async function getProduct(slug: string): Promise<SanityProduct> {
    return client.fetch(
        `*[_type == "product" && slug.current == $slug][0]`,
        { slug }
    )
}