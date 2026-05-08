import Link from 'next/link'
import { Coins } from 'lucide-react'

const sections = [
  {
    heading: '1. Responsable del tratamiento',
    body: 'Cobre Studio, con correo de contacto cobreestudio@gmail.com, es el responsable del tratamiento de los datos personales recogidos a través de este sitio web (https://cobrestudio.vercel.app).',
  },
  {
    heading: '2. Datos que recogemos',
    body: 'Este sitio web no dispone de formularios de registro ni recopila datos personales de forma activa. El único canal de contacto es el botón de email, que abre el cliente de correo del usuario. No almacenamos ninguna información personal en nuestros servidores como resultado de dicha acción.',
  },
  {
    heading: '3. Cookies',
    body: 'Este sitio usa únicamente cookies técnicas estrictamente necesarias para su funcionamiento. No utilizamos cookies de publicidad, seguimiento ni análisis de terceros.',
  },
  {
    heading: '4. Servicios de terceros',
    body: 'El sitio está alojado en Vercel Inc. Vercel puede recoger datos técnicos (IP, agente de navegador) como parte de su infraestructura. Consulta la política de privacidad de Vercel para más información.',
  },
  {
    heading: '5. Tus derechos',
    body: 'De acuerdo con el RGPD, tienes derecho a acceder, rectificar, suprimir y portar tus datos. Para ejercer estos derechos o para cualquier consulta sobre privacidad, escríbenos a cobreestudio@gmail.com.',
  },
  {
    heading: '6. Cambios en esta política',
    body: 'Podemos actualizar esta política en cualquier momento. La versión vigente siempre estará disponible en esta página con la fecha de última actualización.',
  },
]

export const metadata = { robots: { index: false, follow: false } }

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
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
