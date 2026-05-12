import type { Metadata } from 'next'
import { ArrowLeft, Layers } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diseño UI/UX para Productos Digitales',
  description: 'Diseño de interfaces digitales en España centradas en el usuario. Wireframes, sistemas de diseño y prototipos para SaaS y aplicaciones web con Figma y Tailwind CSS.',
  alternates: { canonical: 'https://cobrestudio.vercel.app/servicios/diseno-ux' },
  openGraph: {
    title: 'Diseño UI/UX para Productos Digitales | Cobre Studio',
    description: 'Diseño de interfaces digitales en España centradas en el usuario. Wireframes, sistemas de diseño y prototipos para SaaS y aplicaciones web.',
    url: 'https://cobrestudio.vercel.app/servicios/diseno-ux',
  },
}

const principles = [
  { title: 'Claridad antes que estética', desc: 'Cada pantalla tiene un objetivo claro. Eliminamos el ruido visual antes de añadir decoración.' },
  { title: 'Diseño y código alineados', desc: 'Diseñamos directamente en el stack final (Tailwind CSS). Lo que se diseña, se construye exactamente igual.' },
  { title: 'Microinteracciones que guían', desc: 'Animaciones sutiles, estados de hover y transiciones que hacen al usuario saber siempre dónde está y qué puede hacer.' },
  { title: 'Tipografía y espaciado rigurosos', desc: 'Escalas tipográficas consistentes y sistema de espaciado 4px para interfaces que se ven profesionales en cualquier pantalla.' },
  { title: 'Accesibilidad incluida', desc: 'Contraste WCAG AA, focus states visibles y jerarquía semántica desde el primer prototipo, no como revisión final.' },
  { title: 'Iteración rápida', desc: 'Wireframes en días, no semanas. Preferimos prototipos sobre documentos de especificación que nadie lee.' },
]

const deliverables = ['Wireframes de baja y alta fidelidad', 'Sistema de diseño con tokens', 'Componentes Tailwind CSS listos para producción', 'Flujos de usuario y customer journey', 'Prototipo navegable en Figma', 'Guía de estilo y documentación']

export default function DisenoUx() {
  return (
    <div className="min-h-screen bg-[#07070f] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">
          <ArrowLeft size={14} /> Volver a inicio
        </Link>

        <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-6">
          <Layers size={22} />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Diseño UI/UX para<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#a78bfa,#818cf8)' }}>
            productos digitales
          </span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl">
          Interfaces que el usuario entiende sin manual. Diseñamos con obsesión por el detalle: tipografía, espaciado, jerarquía visual y microinteracciones que hacen que un producto se sienta sólido y de confianza.
        </p>

        <h2 className="text-xl font-bold mb-6 text-white">Cómo diseñamos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {principles.map(({ title, desc }) => (
            <div key={title} className="bg-white/[0.03] border border-white/6 rounded-2xl p-5 hover:border-purple-500/25 transition-colors">
              <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4 text-white">Entregables</h2>
        <ul className="space-y-2 mb-14">
          {deliverables.map(d => (
            <li key={d} className="flex items-center gap-3 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
              {d}
            </li>
          ))}
        </ul>

        <Link href="/#contacto"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 transition-all hover:scale-105">
          Hablar sobre tu proyecto
        </Link>
      </div>
    </div>
  )
}
