import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

const BASE_URL = 'https://cobrestudio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'Cobre Studio — Estudio Digital para Freelancers', template: '%s | Cobre Studio' },
  description: 'Cobre Studio es un estudio digital especializado en productos SaaS para autónomos y freelancers. Creamos herramientas que te ayudan a cobrar, facturar y gestionar tu negocio.',
  keywords: ['estudio digital', 'productos digitales autónomos', 'software freelancers', 'SaaS España', 'app facturación autónomos', 'herramientas freelancer', 'desarrollo web españa'],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Cobre Studio — Estudio Digital para Freelancers',
    description: 'Estudio digital especializado en productos SaaS para autónomos y freelancers. Descubre Cobre, nuestra app de facturación gratuita.',
    url: BASE_URL,
    siteName: 'Cobre Studio',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Cobre Studio — Estudio digital para freelancers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobre Studio — Estudio Digital para Freelancers',
    description: 'Estudio digital especializado en productos SaaS para autónomos y freelancers.',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={geist.className}>{children}</body>
    </html>
  )
}
