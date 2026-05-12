import type { Metadata } from 'next'
import { ArrowLeft, Terminal, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Integración de Agentes de IA en Aplicaciones Web',
  description: 'Integramos agentes de IA con Claude AI en tus aplicaciones web y SaaS. Automatización de tareas, análisis financiero, generación de contenido y asistentes especializados con streaming en tiempo real.',
  alternates: { canonical: 'https://cobrestudio.vercel.app/servicios/agentes-ia' },
  openGraph: {
    title: 'Integración de Agentes de IA en Aplicaciones Web | Cobre Studio',
    description: 'Integramos agentes de IA con Claude AI en tus aplicaciones web y SaaS. Automatización, análisis y asistentes especializados con streaming en tiempo real.',
    url: 'https://cobrestudio.vercel.app/servicios/agentes-ia',
  },
}

const useCases = [
  { title: 'Asesor financiero', desc: 'Analiza métricas del negocio y entrega recomendaciones accionables en tiempo real. Implementado en Cobre para autónomos.' },
  { title: 'Generador de propuestas', desc: 'Crea propuestas comerciales personalizadas basadas en el historial del cliente y el contexto del proyecto.' },
  { title: 'Agente de cobros', desc: 'Genera emails de recordatorio de pago adaptando el tono según los días de retraso. Profesional sin ser agresivo.' },
  { title: 'Asesor fiscal', desc: 'Interpreta datos trimestrales bajo el marco fiscal español (IVA, IRPF, Modelo 303) y entrega orientación específica.' },
  { title: 'Asistente de contenido', desc: 'Redacta descripciones de producto, textos SEO o comunicaciones internas adaptadas al tono de tu marca.' },
  { title: 'Procesador de documentos', desc: 'Extrae, clasifica y estructura información de facturas, contratos o formularios de manera automática.' },
]

const tech = ['Claude AI (Anthropic)', 'Streaming API', 'Next.js API Routes', 'Supabase Auth', 'TypeScript', 'Server-Sent Events']

export default function AgentesIa() {
  return (
    <div className="min-h-screen bg-[#07070f] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={14} /> Volver a inicio
        </Link>

        <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-6">
          <Terminal size={22} />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Agentes de IA integrados<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#34d399,#818cf8)' }}>
            en tu aplicación
          </span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl">
          Integramos inteligencia artificial real en tus aplicaciones web y SaaS. No chatbots genéricos — agentes especializados que conocen el contexto de tu negocio, hablan en el idioma de tus usuarios y automatizan tareas que hoy hacen a mano.
        </p>

        <h2 className="text-xl font-bold mb-6 text-white">Casos de uso implementados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="bg-white/[0.03] border border-white/6 rounded-2xl p-5 hover:border-emerald-500/25 transition-colors">
              <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4 text-white">Tecnologías</h2>
        <div className="flex flex-wrap gap-2 mb-14">
          {tech.map(t => (
            <span key={t} className="text-xs bg-white/4 text-gray-400 border border-white/8 px-3 py-1.5 rounded-xl">{t}</span>
          ))}
        </div>

        <div className="bg-white/[0.03] border border-white/6 rounded-2xl p-6 mb-10">
          <p className="text-sm text-gray-400 mb-3">
            En <strong className="text-white">Cobre</strong> hemos integrado 4 agentes de IA especializados para autónomos: asesor financiero, asesor fiscal, generador de propuestas y agente de cobros. Todos con streaming en tiempo real, exclusivos del plan Pro.
          </p>
          <a href="https://cobre-rho.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            Ver Cobre en producción <ExternalLink size={12} />
          </a>
        </div>

        <Link href="/#contacto"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-500 transition-all hover:scale-105">
          Hablar sobre tu proyecto
        </Link>
      </div>
    </div>
  )
}
