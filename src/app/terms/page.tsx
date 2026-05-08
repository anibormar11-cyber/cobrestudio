import Link from 'next/link'
import { Coins } from 'lucide-react'

const sections = [
  {
    heading: '1. Objeto',
    body: 'Este sitio web (https://cobrestudio.vercel.app) es la web corporativa de Cobre Studio, un estudio digital especializado en productos para freelancers y autónomos. El acceso y uso de este sitio implica la aceptación de los presentes términos.',
  },
  {
    heading: '2. Propiedad intelectual',
    body: 'Todos los contenidos de este sitio (textos, diseño, código, marca y logotipos) son propiedad de Cobre Studio y están protegidos por la legislación vigente en materia de propiedad intelectual. Queda prohibida su reproducción, distribución o uso sin autorización expresa.',
  },
  {
    heading: '3. Productos y servicios',
    body: 'Los productos mencionados en este sitio (como Cobre) se rigen por sus propios términos y condiciones, disponibles en sus respectivas plataformas. Este sitio web tiene carácter exclusivamente informativo.',
  },
  {
    heading: '4. Limitación de responsabilidad',
    body: 'Cobre Studio no garantiza la disponibilidad continua ni la ausencia de errores en este sitio. En ningún caso será responsable de daños directos o indirectos derivados del acceso o uso del sitio, o de la imposibilidad de acceder a él.',
  },
  {
    heading: '5. Enlaces externos',
    body: 'Este sitio puede contener enlaces a sitios de terceros. Cobre Studio no controla dichos sitios y no asume responsabilidad sobre sus contenidos o políticas de privacidad.',
  },
  {
    heading: '6. Modificaciones',
    body: 'Cobre Studio se reserva el derecho a modificar estos términos en cualquier momento. La versión actualizada estará siempre disponible en esta página.',
  },
  {
    heading: '7. Legislación aplicable',
    body: 'Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales de España.',
  },
  {
    heading: '8. Contacto',
    body: 'Para cualquier consulta, escríbenos a cobreestudio@gmail.com.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07070f] text-white">
      <nav className="border-b border-white/5 sticky top-0 z-10 bg-[#07070f]/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Coins size={13} className="text-white" />
          </div>
          <span className="font-bold text-white">Cobre Studio</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-indigo-400 hover:underline mb-8 inline-block">
          ← Volver a inicio
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Aviso Legal y Términos de Uso</h1>
        <p className="text-sm text-gray-500 mb-10">Última actualización: mayo 2025</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-white mb-2">{section.heading}</h2>
              <p className="text-gray-400 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 py-6 px-6 text-center mt-16">
        <p className="text-xs text-gray-700">© {new Date().getFullYear()} Cobre Studio. Hecho con cuidado.</p>
      </footer>
    </div>
  )
}
