import { MetadataRoute } from 'next'
import { servicesData } from '@/constants/servicesData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://4kmedia.in'

    // Dynamic service routes
    const serviceUrls = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const routes = [
        '',
        '/about',
        '/services',
        '/careers',
        '/contact',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.7,
    }))

    return [...routes, ...serviceUrls]
}
