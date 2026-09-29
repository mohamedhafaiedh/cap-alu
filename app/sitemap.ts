import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://capalu.fr', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://capalu.fr/mentions-legales', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 }
  ];
}
