'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Coins, Zap, Code2, Layers, Mail, ExternalLink, Terminal } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

// ── Tilt 3D card ────────────────────────────────────────────────────────────
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setStyle({ transform: `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`, transition: 'transform 0.08s ease-out' })
  }
  const onLeave = () => setStyle({ transform: 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.5s ease-out' })

  return <div ref={ref} style={style} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>{children}</div>
}

// ── Scroll reveal ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: on ? 1 : 0, transform: on ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Animated counter ────────────────────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const step = to / (1400 / 16)
        let cur = 0
        const t = setInterval(() => { cur += step; if (cur >= to) { setN(to); clearInterval(t) } else setN(Math.floor(cur)) }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [cursor, setCursor] = useState({ x: -300, y: -300 })
  const [typed, setTyped] = useState('')
  const full = 'que funcionan.'

  useEffect(() => {
    const h = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const t = setInterval(() => {
        setTyped(full.slice(0, i + 1)); i++
        if (i >= full.length) clearInterval(t)
      }, 75)
      return () => clearInterval(t)
    }, 800)
    return () => clearTimeout(delay)
  }, [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cobre Studio',
    url: 'https://cobrestudio.vercel.app',
    email: 'cobreestudio@gmail.com',
    description: 'Estudio digital especializado en productos SaaS para autónomos y freelancers.',
    foundingDate: '2025',
    knowsAbout: ['SaaS', 'Desarrollo web', 'Productos digitales', 'Facturación para autónomos'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Cobre',
          url: 'https://cobre-rho.vercel.app',
          applicationCategory: 'BusinessApplication',
          description: 'App de facturación gratuita para autónomos y freelancers.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'WebSite',
          name: 'LUD Doméstica',
          url: 'https://luddomestica.vercel.app',
          description: 'Web corporativa para tienda de electrodomésticos con catálogo y gestión de productos.',
        },
      },
    ],
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="min-h-screen bg-[#07070f] text-white overflow-x-hidden">

      {/* Cursor glow */}
      <div className="fixed pointer-events-none z-50 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', left: cursor.x - 144, top: cursor.y - 144, transition: 'left 0.12s ease, top 0.12s ease' }} />

      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#07070f]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Coins size={13} className="text-white" />
            </div>
            <span className="font-bold tracking-tight text-sm">Cobre Studio</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#servicios" className="text-sm text-gray-500 hover:text-white transition-colors hidden sm:block">Servicios</a>
            <a href="#productos" className="text-sm text-gray-500 hover:text-white transition-colors hidden sm:block">Productos</a>
            <a href="#contacto" className="text-sm bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" style={{ animation: 'orb1 9s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/12 rounded-full blur-3xl" style={{ animation: 'orb2 11s ease-in-out infinite' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-indigo-400/8 rounded-full blur-2xl" style={{ animation: 'orb3 14s ease-in-out infinite' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="relative text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/4 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-10 border border-white/8 backdrop-blur-sm"
            style={{ animation: 'fadeUp 0.6s ease both' }}>
            <Zap size={11} /> Estudio digital independiente
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-none mb-6 tracking-tight"
            style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
            Hacemos productos
            <br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#818cf8,#a78bfa,#818cf8)', backgroundSize: '200%', animation: 'shimmer 4s linear infinite' }}>
              {typed}<span className="opacity-70 animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
            Somos un pequeño equipo que diseña y construye productos digitales con atención al detalle y obsesión por el usuario.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>
            <a href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-950 text-base">
              Ver productos <ArrowRight size={16} />
            </a>
            <a href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/4 border border-white/8 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/8 transition-all backdrop-blur-sm text-base">
              Hablar con nosotros
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20" style={{ animation: 'float 2.5s ease-in-out infinite' }}>
          <div className="w-px h-10 bg-white/50 rounded-full mx-auto" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-12 px-6">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <Reveal>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1"><Counter to={2} /></p>
            <p className="text-xs text-gray-600">Productos en producción</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1 text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg,#818cf8,#a78bfa)' }}>
              Next.js
            </p>
            <p className="text-xs text-gray-600 mt-1">+ Supabase · Stripe · Claude AI</p>
            <p className="text-xs text-gray-700 mt-1">Stack tecnológico principal</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1"><Counter to={100} suffix="%" /></p>
            <p className="text-xs text-gray-600">Código propio, sin plantillas</p>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">Servicios</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lo que hacemos</h2>
              <p className="text-gray-500 max-w-sm mx-auto">De la idea al producto en producción, sin intermediarios.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Code2, grad: 'from-indigo-600/15 to-transparent', border: 'border-indigo-500/15 hover:border-indigo-500/35', ic: 'bg-indigo-500/10 text-indigo-400', title: 'Desarrollo de producto', desc: 'Aplicaciones web y SaaS robustos, rápidos y escalables. Next.js, Supabase, Stripe, TypeScript.', tags: ['Next.js', 'TypeScript', 'Supabase'] },
              { icon: Layers, grad: 'from-purple-600/15 to-transparent', border: 'border-purple-500/15 hover:border-purple-500/35', ic: 'bg-purple-500/10 text-purple-400', title: 'Diseño de interfaz', desc: 'Interfaces limpias e intuitivas. Obsesión por los detalles: tipografía, espaciado, microanimaciones.', tags: ['UI/UX', 'Figma', 'Tailwind'] },
              { icon: Terminal, grad: 'from-emerald-600/15 to-transparent', border: 'border-emerald-500/15 hover:border-emerald-500/35', ic: 'bg-emerald-500/10 text-emerald-400', title: 'Agentes de IA', desc: 'Integramos IA generativa para automatizar tareas y ofrecer experiencias que sorprenden al usuario.', tags: ['Claude AI', 'Streaming', 'LLMs'] },
            ].map(({ icon: Icon, grad, border, ic, title, desc, tags }, i) => (
              <Reveal key={title} delay={i * 100}>
                <TiltCard className="h-full">
                  <div className={`h-full bg-gradient-to-b ${grad} border ${border} rounded-2xl p-6 transition-colors duration-300 cursor-default`}>
                    <div className={`inline-flex p-3 rounded-xl mb-5 ${ic}`}><Icon size={19} /></div>
                    <h3 className="font-bold text-white text-base mb-3">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => <span key={t} className="text-xs bg-white/4 text-gray-500 border border-white/6 px-2.5 py-1 rounded-lg">{t}</span>)}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="productos" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">Productos</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lo que hemos construido</h2>
              <p className="text-gray-500 max-w-sm mx-auto">Productos que lanzamos, usamos y mantenemos nosotros mismos.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {/* Animated gradient border */}
            <div className="p-px rounded-3xl" style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7,#6366f1,#6366f1)', backgroundSize: '300%', animation: 'shimmer 4s linear infinite' }}>
              <div className="bg-[#0d0d1a] rounded-3xl p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/60" style={{ animation: 'float 4s ease-in-out infinite' }}>
                    <Coins size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">Cobre</h3>
                      <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-500/20">
                        ● En producción
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-5 max-w-xl">
                      Plataforma de gestión para autónomos y freelancers. Clientes, proyectos y facturas con PDF profesional, recordatorios automáticos y agentes de IA para cobros y análisis financiero.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Next.js 15', 'Supabase', 'Stripe', 'Claude AI', 'Resend', 'i18n'].map(t => (
                        <span key={t} className="text-xs bg-white/4 text-gray-400 border border-white/8 px-3 py-1.5 rounded-xl">{t}</span>
                      ))}
                    </div>
                    <a href="https://cobre-rho.vercel.app" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-900/50">
                      Visitar <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-4 border border-blue-500/15 hover:border-blue-500/30 bg-gradient-to-b from-blue-600/8 to-transparent rounded-3xl p-8 sm:p-10 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/60 text-2xl font-extrabold text-white select-none" style={{ animation: 'float 4s ease-in-out infinite' }}>
                  L
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">LUD Doméstica</h3>
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-500/20">
                      ● En producción
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-1 max-w-xl">
                    Web corporativa para tienda de electrodomésticos. Catálogo dinámico con Supabase, animaciones SVG, filosofía de marca y optimización SEO completa.
                  </p>
                  <p className="text-xs text-gray-600 mb-5">Limpio, Útil y Duradero.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'Supabase', 'Tailwind CSS', 'Puppeteer', 'SEO'].map(t => (
                      <span key={t} className="text-xs bg-white/4 text-gray-400 border border-white/8 px-3 py-1.5 rounded-xl">{t}</span>
                    ))}
                  </div>
                  <a href="https://luddomestica.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-900/50">
                    Ver proyecto <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">Proceso</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Simple y directo</h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Entendemos el problema', desc: 'Antes de escribir una línea de código, nos aseguramos de entender bien qué hay que resolver y por qué.' },
              { n: '02', title: 'Diseñamos la solución', desc: 'Iteramos rápido en wireframes antes que en código. Menos suposiciones, más claridad.' },
              { n: '03', title: 'Construimos rápido', desc: 'Entregamos versiones funcionales cuanto antes para aprender del uso real, no de las hipótesis.' },
              { n: '04', title: 'Mejoramos sin parar', desc: 'El producto no termina en el lanzamiento. Monitorizamos, escuchamos y mejoramos continuamente.' },
            ].map(({ n, title, desc }, i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="group flex gap-5 items-start">
                  <span className="text-4xl font-extrabold text-white/5 group-hover:text-indigo-400/20 transition-colors duration-500 shrink-0 w-12 text-right leading-tight pt-1">{n}</span>
                  <div className="flex-1 bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] rounded-2xl px-6 py-5 transition-all duration-300">
                    <h3 className="font-bold text-white mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">Nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Un equipo pequeño<br />con ideas claras</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Somos dos desarrolladores que construyen cosas que funcionan de verdad. Creemos en el código limpio, el diseño honesto y los productos que resuelven problemas reales sin añadir complejidad innecesaria.
            </p>
            <p className="text-gray-700 mt-5 text-base">Cada producto que lanzamos, lo usamos nosotros mismos.</p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="py-28 px-6 border-t border-white/5">
        <Reveal>
          <div className="max-w-xl mx-auto text-center">
            <div className="relative inline-flex p-4 rounded-2xl mb-8">
              <div className="absolute inset-0 bg-indigo-500/15 rounded-2xl blur-2xl" />
              <Mail size={22} className="text-indigo-400 relative" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Tienes algo en mente?</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">Cuéntanos qué quieres construir. Somos directos y respondemos rápido.</p>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-500 rounded-md flex items-center justify-center">
              <Coins size={10} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-600">Cobre Studio</span>
          </div>
          <p className="text-xs text-gray-700">© {new Date().getFullYear()} Cobre Studio. Hecho con cuidado.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">Privacidad</Link>
            <span className="text-gray-700">·</span>
            <Link href="/terms" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">Aviso legal</Link>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes orb1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(70px,-50px)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-60px,60px)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(40px,-35px)} 66%{transform:translate(-30px,25px)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes shimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
    </>
  )
}
