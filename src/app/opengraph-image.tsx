import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cobre Studio — Estudio digital para freelancers y autónomos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#07070f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow orb top right */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Glow orb bottom left */}
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#6366f1',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
            }} />
          </div>
          <span style={{ fontSize: '28px', fontWeight: '700', color: '#ffffff', display: 'flex' }}>
            Cobre Studio
          </span>
        </div>

        {/* Main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{
            fontSize: '20px',
            color: '#6366f1',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            Estudio digital
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              fontSize: '74px',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1',
              display: 'flex',
            }}>
              Productos digitales
            </span>
            <span style={{
              fontSize: '74px',
              fontWeight: '800',
              lineHeight: '1',
              display: 'flex',
              background: 'linear-gradient(90deg, #818cf8, #c4b5fd)',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              para freelancers.
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '18px',
            color: '#4b5563',
            fontStyle: 'italic',
            display: 'flex',
          }}>
            Hecho con cuidado.
          </span>
          <span style={{ fontSize: '16px', color: '#374151', display: 'flex' }}>
            cobrestudio.vercel.app
          </span>
        </div>

        {/* Bottom gradient bar */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '3px',
          background: 'linear-gradient(90deg, #4f46e5 0%, #818cf8 50%, #c4b5fd 100%)',
          display: 'flex',
        }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
