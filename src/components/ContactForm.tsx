'use client'

import { useState } from 'react'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        const d = await res.json()
        setErrorMsg(d.error || 'Error al enviar. Inténtalo de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Error de conexión. Inténtalo de nuevo.')
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/6 transition-all'

  if (status === 'sent') return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
        <Check size={28} className="text-emerald-400" />
      </div>
      <div className="text-center">
        <p className="font-bold text-white text-lg">Mensaje recibido</p>
        <p className="text-gray-500 text-sm mt-1">Te respondemos en menos de 24h.</p>
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm text-red-400">
          <AlertCircle size={14} className="shrink-0" /> {errorMsg}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Nombre</label>
          <input
            type="text" required placeholder="Tu nombre"
            value={form.name} onChange={e => set('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
          <input
            type="email" required placeholder="tu@email.com"
            value={form.email} onChange={e => set('email', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Mensaje</label>
        <textarea
          required rows={4} placeholder="Cuéntanos qué quieres construir..."
          value={form.message} onChange={e => set('message', e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit" disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
      >
        {status === 'sending' ? (
          <>
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>Enviar mensaje <ArrowRight size={16} /></>
        )}
      </button>
    </form>
  )
}
