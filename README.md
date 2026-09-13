# UNIRAS Corporate

Official digital corporate profile for **UNIRAS SDN. BHD.**

**Registration No.:** 1478108T / 202201032411

UNIRAS is positioned as a digital product and systems company focused on software products, application development, business systems, AI-assisted workflows, and technology implementation.

## Architecture

- Next.js 16
- React 19
- TypeScript
- Static export
- No database
- No authentication
- No Supabase dependency
- Deployment target: Cloudflare Pages

## Product direction

The site acts as a corporate profile, capability deck, product showcase, and trust layer. LOOKAL is presented as an operated product, while other platforms may be included as selected technology work where appropriate.

## Development

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

Static output is written to `out/`.

## Deployment

Cloudflare Pages:

- Build command: `pnpm build`
- Build output directory: `out`
- Production branch: `main`
