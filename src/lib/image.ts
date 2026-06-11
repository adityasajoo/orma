import { createImageUrlBuilder, SanityImageObject } from '@sanity/image-url';
import { client } from './sanityClient';

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageObject) {
    return builder.image(source).url()
}
