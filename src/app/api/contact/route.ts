import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
    to: 'cobreestudio@gmail.com',
    subject: `Nuevo mensaje de ${name} — Cobre Studio`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;color:#1f2937;">
        <div style="background:#07070f;border-radius:12px;padding:20px 24px;margin-bottom:24px;display:flex;align-items:center;gap:10px;">
          <div style="background:#6366f1;border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;">
            <div style="background:white;border-radius:50%;width:14px;height:14px;"></div>
          </div>
          <span style="color:white;font-weight:700;font-size:16px;">Cobre Studio</span>
        </div>
        <h2 style="font-size:20px;font-weight:700;margin-bottom:16px;">Nuevo mensaje de contacto</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:80px;">Nombre</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td></tr>
        </table>
        <div style="background:#f9fafb;border-radius:10px;padding:16px;font-size:15px;line-height:1.6;color:#374151;white-space:pre-line;">${message}</div>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
        <p style="color:#9ca3af;font-size:12px;">Enviado desde cobrestudio.vercel.app</p>
      </div>
    `,
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
