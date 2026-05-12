import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const geist = Geist({ subsets: ['latin'] })

const BASE_URL = 'https://cobrestudio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: 'Cobre Studio | Agencia de Desarrollo SaaS en España', template: '%s | Cobre Studio' },
  description: 'Estudio digital en España especializado en desarrollo SaaS, UI/UX y agentes de IA. Construimos productos que autónomos y freelancers usan a diario.',
  keywords: ['agencia desarrollo SaaS España', 'desarrollo productos digitales', 'software autónomos', 'app facturación freelancers', 'agentes IA aplicaciones web', 'estudio digital España'],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Cobre Studio | Agencia de Desarrollo SaaS en España',
    description: 'Estudio digital en España especializado en desarrollo SaaS, UI/UX y agentes de IA. Construimos productos que autónomos y freelancers usan a diario.',
    url: BASE_URL,
    siteName: 'Cobre Studio',
    type: 'website',
    locale: 'es_ES',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Cobre Studio — Agencia de desarrollo SaaS y productos digitales en España' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobre Studio | Agencia de Desarrollo SaaS en España',
    description: 'Estudio digital en España especializado en desarrollo SaaS, UI/UX y agentes de IA.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={geist.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
