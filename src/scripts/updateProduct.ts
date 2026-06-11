
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'g5fyjkta',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: 'sk6TPHPS9lEPL3yqWCYdGGvvtHlyiXQWAuMb7051Jt4rAPK2QODwUmr3GesZ2JtUXP5rkwyUGyEGcQKuJzAxCFO6YHu9DXJJteNTs123pck70w6D4fjeBjblHzkg2c1YFo9xvVbuQc2J8ifOZngIHRAi3UaZT24DW2F2iwoKmks33PQSK9ce',
    useCdn: false,
})

const PRODUCT_DETAILS: Record<string, { description: string; composition: string }> = {
    'double-collar-top': {
        description: 'Double collar top designed with two layered collars: one high collar and one convertible collar. The piece features a screwable front closure and subtle pattern detailing placed only along the seams, creating a clean, structured surface with quiet tension.',
        composition: '70% Polyester, 30% Wool. Dry clean only. Made in India.',
    },
    'flared-pant': {
        description: 'Layered flared pants featuring two waistbands, one high and one regular, to create a strong sculpted waist. Finished with handmade buttons and hand-painted splashed lining beneath the layers, the piece combines structure with movement.',
        composition: '80% Polyester, 20% Wool. Dry clean only. Made in India.',
    },
    'rift-skirt': {
        description: 'Multilayered asymmetrical skirt with a structured yet fluid silhouette. The hand-painted lining sits beneath the layers, adding depth and movement while keeping the piece sharp, textured, and quietly dramatic.',
        composition: '70% Polyester, 30% Wool. Dry clean only. Made in India.',
    },
    'rorschach-cropped-jacket': {
        description: 'Cropped structured jacket with a layered silhouette and digital Rorschach print across the surface. The piece is sharply constructed, holding its form while creating a sense of distortion, depth, and controlled chaos.',
        composition: '100% Cotton. Dry clean only. Made in India.',
    },
    'fragment-corset': {
        description: 'Sculpted 20-panel corset with intricate beadwork and delicate stocking-based detailing. The piece is highly crafted and intimate, balancing rigid construction with fragile surface work and hand-finished texture.',
        composition: '70% Polyester, 30% Wool. Dry clean only. Made in India.',
    },
}

async function seedDetails() {
    console.log('\nPatching product details...\n')

    for (const [slug, details] of Object.entries(PRODUCT_DETAILS)) {
        // Find the document by slug
        const doc = await client.fetch(
            `*[_type == "product" && slug.current == $slug][0]{ _id }`,
            { slug }
        )

        if (!doc) {
            console.warn(`⚠️  Product not found: ${slug}`)
            continue
        }

        await client
            .patch(doc._id)
            .set({
                description: details.description,
                composition: details.composition,
            })
            .commit()

        console.log(`✓ Patched: ${slug}`)
    }

    console.log('\n✅ Done!')
}

seedDetails().catch((err) => {
    console.error('Failed:', err)
    process.exit(1)
})