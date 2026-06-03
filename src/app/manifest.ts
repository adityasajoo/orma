import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OR•MA Studio',
    short_name: 'OR•MA',
    description: 'Luxury clothing studio — Collection 01: Residue // 2026',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d0d0d',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/latest/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/latest/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
