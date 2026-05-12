const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Cobre Studio',
  url: 'https://cobrestudio.vercel.app',
  email: 'cobreestudio@gmail.com',
  description: 'Estudio digital en España especializado en desarrollo SaaS, diseño UI/UX e integración de agentes de IA para autónomos y freelancers.',
  foundingDate: '2025',
  areaServed: { '@type': 'Country', name: 'Spain' },
  knowsAbout: ['Desarrollo SaaS', 'Diseño UI/UX', 'Agentes de IA', 'Next.js', 'Supabase', 'Stripe', 'Claude AI'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'Cobre',
        url: 'https://cobre-rho.vercel.app',
        applicationCategory: 'BusinessApplication',
        description: 'Plataforma de gestión para autónomos y freelancers: clientes, proyectos, facturas y agentes de IA.',
        operatingSystem: 'Web',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'WebSite',
        name: 'LUD Doméstica',
        url: 'https://luddomestica.vercel.app',
        description: 'Web corporativa para tienda de electrodomésticos con catálogo dinámico y SEO.',
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
