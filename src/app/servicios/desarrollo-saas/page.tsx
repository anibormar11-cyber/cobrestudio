import type { Metadata } from 'next'
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Desarrollo de Aplicaciones SaaS a Medida',
  description: 'Desarrollamos aplicaciones SaaS en España con Next.js, Supabase y Stripe. Desde la idea hasta producción, con autenticación, pagos y escalabilidad incluidos.',
  alternates: { canonical: 'https://cobrestudio.vercel.app/servicios/desarrollo-saas' },
  openGraph: {
    title: 'Desarrollo de Aplicaciones SaaS a Medida | Cobre Studio',
    description: 'Desarrollamos aplicaciones SaaS en España con Next.js, Supabase y Stripe. Desde la idea hasta producción.',
    url: 'https://cobrestudio.vercel.app/servicios/desarrollo-saas',
  },
}

const stack = ['Next.js 16', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS', 'Vercel', 'Resend', 'Claude AI']

const features = [
  { title: 'Autenticación y usuarios', desc: 'Registro, login, roles y permisos con Supabase Auth. Row Level Security para que cada usuario solo vea sus datos.' },
  { title: 'Pagos y suscripciones', desc: 'Integración con Stripe: planes Free/Pro, checkout, portal de cliente y webhooks para sincronización en tiempo real.' },
  { title: 'Base de datos y API', desc: 'PostgreSQL en Supabase con migraciones versionadas, API REST automática y tipado completo con TypeScript.' },
  { title: 'Deploy y CD', desc: 'Despliegue en Vercel con continuous delivery desde GitHub. SSL automático y CDN global incluidos.' },
  { title: 'Emails transaccionales', desc: 'Recordatorios automáticos, notificaciones y emails de bienvenida con Resend y plantillas personalizadas.' },
  { title: 'Agentes de IA integrados', desc: 'Asistentes especializados con Claude AI para automatizar tareas repetitivas dentro del propio SaaS.' },
]

export default function DesarrolloSaas() {
  return (
    <div className="min-h-screen bg-[#07070f] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={14} /> Volver a inicio
        </Link>

        <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-6">
          <Code2 size={22} />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Desarrollo de aplicaciones<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#818cf8,#a78bfa)' }}>
            SaaS a medida en España
          </span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl">
          Construimos aplicaciones web SaaS completas: desde la arquitectura hasta el deploy en producción. Stack moderno, código limpio y entrega rápida. Sin dependencias de terceros innecesarias, sin costes ocultos.
        </p>

        <h2 className="text-xl font-bold mb-6 text-white">Qué incluye cada proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {features.map(({ title, desc }) => (
            <div key={title} className="bg-white/[0.03] border border-white/6 rounded-2xl p-5 hover:border-indigo-500/25 transition-colors">
              <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4 text-white">Stack tecnológico</h2>
        <div className="flex flex-wrap gap-2 mb-14">
          {stack.map(t => (
            <span key={t} className="text-xs bg-white/4 text-gray-400 border border-white/8 px-3 py-1.5 rounded-xl">{t}</span>
          ))}
        </div>

        <div className="bg-white/[0.03] border border-white/6 rounded-2xl p-6 mb-10">
          <p className="text-sm text-gray-400 mb-3">Ejemplo real: construimos <strong className="text-white">Cobre</strong>, un SaaS de gestión para autónomos con autenticación, CRUD completo, exportación a PDF, pagos con Stripe, emails automáticos y 4 agentes de IA integrados.</p>
          <a href="https://cobre-rho.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            Ver Cobre en producción <ExternalLink size={12} />
          </a>
        </div>

        <Link href="/#contacto"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500 transition-all hover:scale-105">
          Hablar sobre tu proyecto
        </Link>
      </div>
    </div>
  )
}
