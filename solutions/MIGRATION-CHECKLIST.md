# UNIRAS Solutions — site migration checklist

## Verified architecture
- Corporate source: branch `main` (Next.js static export). Do not change.
- Solutions source: branch `solutions-production`, directory `solutions/site/`.
- Corporate Pages project: `uniras-corporate`, domain `uniras.my`.
- Solutions Pages project: `uniras-solution`, domain `solutions.uniras.my`.
- Only `solutions/site/` is passed to Wrangler for Solutions deployment.

## Deployment safety checklist
- [ ] Upload v1.6 `index.html`, `robots.txt`, `sitemap.xml`, and all 7 images to `solutions/site/assets/`.
- [ ] Confirm image paths and functional WhatsApp selector / Jotform.
- [ ] Confirm vendor's permission to publish portfolio photos.
- [ ] Add the GitHub Action secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` yourself; never share keys in chat.
- [ ] Create a `solutions-production` GitHub environment; require reviewer approval if available.
- [ ] Run the workflow from Actions and inspect the deployment before considering CI/CD active.
- [ ] Keep `solutions-production` separate: never merge it into `main`.

## Known limitation
The ChatGPT GitHub connection can write UTF-8 files, but bulk binary image upload from local chat attachments is not supported by its current actions. For the first migration, the complete v1.6 website assets must be uploaded by an authenticated git client or GitHub upload UI. Once present, future text/layout edits may be committed directly through ChatGPT.

## Rollback
Use Cloudflare Pages previous successful deployment or revert the Solutions branch commit. Never change the parent domain's DNS to roll back Solutions.
