# Cobre Studio — Web de la agencia de desarrollo SaaS

## Identidad del proyecto
- **Nombre:** Cobre Studio
- **Repo:** https://github.com/anibormar11-cyber/cobrestudio (rama `master`)
- **Deploy:** Vercel (CD automático) — https://cobrestudio.vercel.app
- **Ruta local:** `C:\Users\AlumnoSMR1\Projects\cobrestudio`

## Stack
- Next.js 16.x + TypeScript + Tailwind CSS v4
- Resend (formulario de contacto)
- Upstash Redis (rate limiting en formulario de contacto)
- Sin base de datos propia — es una web estática con un endpoint de contacto

## Variables de entorno necesarias
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`

## Reglas críticas de Git/Vercel
- **NUNCA** añadir `Co-Authored-By` en commits — Vercel Hobby lo bloquea
- Rama activa: `master` (no main)

## Qué es esta web
Web de presentación de Cobre Studio, estudio de desarrollo SaaS. Muestra los dos productos:
1. **Cobre** — SaaS de gestión para freelancers (https://cobre-rho.vercel.app)
2. **LUD Doméstica** — (https://luddomestica.vercel.app) — tarjeta con gradiente azul `blue-600/800`, animación float

## Estructura de páginas
- `/` — Landing principal con hero, productos, servicios, stats, contacto
- `/servicios/desarrollo-saas` — Página de servicio
- `/servicios/diseno-ux` — Página de servicio
- `/servicios/agentes-ia` — Página de servicio

## Componentes clave
- `src/app/page.tsx` — Página principal (cliente)
- `src/app/layout.tsx` — Metadata SEO, JSON-LD import
- `src/components/JsonLd.tsx` — Server component con structured data `ProfessionalService`
- `src/app/api/contact/route.ts` — Formulario de contacto con validación + escapeHtml + rate limiting

## SEO implementado
- JSON-LD `ProfessionalService` con `areaServed: Spain`, lista ambos productos
- Meta title: "Cobre Studio | Agencia de Desarrollo SaaS en España"
- Meta description 148 chars con "en España"
- `aria-label` en H1 (efecto typewriter, keywords para crawlers)
- Sitemap con páginas de servicios (priority 0.8)
- Service pages individuales para SEO long-tail

## Seguridad implementada
- CSP + 5 security headers en `next.config.ts`
- `connect-src 'self'` (sin servicios externos en frontend)
- Input validation en `/api/contact`: nombre ≤100, email formato+≤254, mensaje ≤2000
- HTML escaping en el email enviado
- Rate limiting: 5 req/h por IP (Upstash Redis, prefijo `cobrestudio:contact`)

## Agentes disponibles (`.claude/agents/`)
- `sales-deal-strategist.md`
- `marketing-content-creator.md`
- `marketing-seo-specialist.md`

## Pendiente
- Dominio personalizado `cobrestudio.es` (~15€) — decisión del usuario
- Esperar parche de Next.js para CVEs (monitorizar github.com/vercel/next.js/releases)
- CSP nonces para eliminar `'unsafe-inline'` (opcional)
