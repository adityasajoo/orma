import { SanityProduct } from "@/types/sanity";
import { client } from "../sanityClient";

async function getProductsByCategory(
    category: string,
): Promise<SanityProduct[]> {
    return client.fetch(
        `*[_type == "product" && category == $category] | order(_updatedAt asc)`,
        { category },
    );
}

export { getProductsByCategory };