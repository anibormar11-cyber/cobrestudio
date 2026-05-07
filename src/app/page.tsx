import Link from 'next/link'
import { ArrowRight, Coins, Zap, Users, Code2, Layers, Mail, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Nav */}
      <nav className="border-b border-white/5 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Coins size={14} className="text-white" />
            </div>
            <span className="font-bold text-white tracking-tight">Cobre Studio</span>
          </div>
          <a href="mailto:hola@cobrestudio.com"
            className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 border border-indigo-500/20">
            <Zap size={11} />
            Estudio digital independiente
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Hacemos productos{' '}
            <span className="text-indigo-400">que funcionan</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Somos un pequeño equipo que diseña y desarrolla productos digitales útiles, con atención al detalle y foco en el usuario.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors text-base">
              Ver nuestros productos
              <ArrowRight size={16} />
            </a>
            <a href="mailto:hola@cobrestudio.com"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-gray-300 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 transition-colors text-base">
              Hablar con nosotros
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Lo que hacemos</h2>
            <p className="text-gray-400">Desde la idea hasta el producto en producción.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Code2,
                color: 'bg-indigo-500/10 text-indigo-400',
                title: 'Desarrollo de producto',
                desc: 'Construimos aplicaciones web y SaaS robustos, rápidos y escalables usando tecnologías modernas.',
              },
              {
                icon: Layers,
                color: 'bg-purple-500/10 text-purple-400',
                title: 'Diseño de interfaz',
                desc: 'Interfaces limpias, intuitivas y bonitas. Nos obsesiona que la experiencia de usuario sea impecable.',
              },
              {
                icon: Users,
                color: 'bg-emerald-500/10 text-emerald-400',
                title: 'Consultoría técnica',
                desc: 'Te ayudamos a tomar las decisiones técnicas correctas para tu proyecto antes de empezar a construir.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${color}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Nuestros productos</h2>
            <p className="text-gray-400">Productos que construimos y mantenemos nosotros mismos.</p>
          </div>

          {/* Cobre card */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-8">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
              <Coins size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">Cobre</h3>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-medium border border-indigo-500/30">
                  Activo
                </span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Plataforma de gestión para autónomos y freelancers. Clientes, proyectos, facturas con PDF profesional, recordatorios automáticos y agentes de IA integrados.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Next.js', 'Supabase', 'Stripe', 'IA generativa', 'i18n'].map(tag => (
                  <span key={tag} className="text-xs bg-white/5 text-gray-400 border border-white/10 px-2.5 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="https://cobre-rho.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                Visitar producto <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* More coming */}
          <div className="mt-5 bg-white/2 border border-dashed border-white/8 rounded-2xl p-8 text-center">
            <p className="text-gray-500 text-sm">Más productos en camino ✦</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quiénes somos</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Cobre Studio es un equipo pequeño con las ideas claras. Creemos en construir cosas útiles, con buen diseño y sin complicar lo que no hay que complicar. Cada producto que lanzamos lo usaríamos nosotros mismos.
          </p>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl mb-6 border border-indigo-500/20">
            <Mail size={22} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-400 mb-8">Cuéntanos qué quieres construir. Somos directos y respondemos rápido.</p>
          <a href="mailto:hola@cobrestudio.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors text-base shadow-lg shadow-indigo-900/40">
            hola@cobrestudio.com
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-indigo-500 rounded-md flex items-center justify-center">
              <Coins size={10} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-400">Cobre Studio</span>
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Cobre Studio. Hecho con cuidado.</p>
        </div>
      </footer>

    </div>
  )
}
