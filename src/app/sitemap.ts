import { MetadataRoute } from 'next'

const BASE_URL = 'https://cobrestudio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/servicios/desarrollo-saas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/servicios/diseno-ux`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/servicios/agentes-ia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
