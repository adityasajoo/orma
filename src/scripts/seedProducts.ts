// scripts/seedProducts.ts
import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'

const client = createClient({
    projectId: 'g5fyjkta',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: 'sk6TPHPS9lEPL3yqWCYdGGvvtHlyiXQWAuMb7051Jt4rAPK2QODwUmr3GesZ2JtUXP5rkwyUGyEGcQKuJzAxCFO6YHu9DXJJteNTs123pck70w6D4fjeBjblHzkg2c1YFo9xvVbuQc2J8ifOZngIHRAi3UaZT24DW2F2iwoKmks33PQSK9ce',
    useCdn: false,
})

// Cache so we don't re-upload the same image twice
const uploadCache = new Map<string, string>()

async function uploadImage(imagePath: string): Promise<string> {
    if (uploadCache.has(imagePath)) {
        return uploadCache.get(imagePath)!
    }

    // imagePath is like '/images-final/...' — resolve from your public folder
    const absolutePath = path.join(process.cwd(), 'public', imagePath)
    const fileBuffer = fs.readFileSync(absolutePath)
    const ext = path.extname(imagePath).replace('.', '') // jpg, webp, etc.

    const asset = await client.assets.upload('image', fileBuffer, {
        filename: path.basename(imagePath),
        contentType: `image/${ext === 'jpg' ? 'jpeg' : ext}`,
    })

    uploadCache.set(imagePath, asset._id)
    console.log(`  ✓ Uploaded: ${path.basename(imagePath)}`)
    return asset._id
}

function toImageRef(assetId: string, key?: string) {
    return {
        _type: 'image' as const,
        ...(key ? { _key: key } : {}),
        asset: {
            _type: 'reference' as const,
            _ref: assetId,
        },
    }
}

function slugify(name: string) {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
}

async function seedProducts() {
    const { products } = await import('../data/products') // adjust path to your file

    console.log(`\nSeeding ${products.length} products...\n`)

    for (const product of products) {
        console.log(`→ ${product.name}`)

        const mainImageId = await uploadImage(product.mainImage)
        const hoverImageId = await uploadImage(product.hoverImage)
        const galleryIds = await Promise.all(product.gallery.map(uploadImage))

        const doc = {
            _type: 'product',
            name: product.name,
            price: product.price,
            slug: {
                _type: 'slug',
                current: product.slug || slugify(product.name),
            },
            category: product.category,
            mainImage: toImageRef(mainImageId),
            hoverImage: toImageRef(hoverImageId),
            gallery: galleryIds.map((id, i) =>
                toImageRef(id, `gallery-${i}`)
            ),
        }

        const result = await client.create(doc)
        console.log(`  ✓ Created product: ${result._id}\n`)
    }

    console.log('✅ Seed complete!')
}

seedProducts().catch((err) => {
    console.error('Seed failed:', err)
    process.exit(1)
})