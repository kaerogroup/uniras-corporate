# UNIRAS Solutions — isolated deployment

Repo: kaerogroup/uniras-corporate (shared repo, **separate branch**).
Corporate source and deployment stay on **main**.
Solutions source and deployment live on **solutions-production**.
Solutions Cloudflare Pages project: **uniras-solution**.
Corporate Cloudflare Pages project: **uniras-corporate**.
Solutions production domain: **solutions.uniras.my**.

Rules:
1. Do not merge solutions-production into main.
2. Solutions static publish folder is `solutions/site/`. Only that folder deploys.
3. Never change the `uniras-corporate` Cloudflare project in this workflow.
4. GitHub Actions secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are configured in GitHub, not committed.
5. Workflow requires `solutions/site/index.html`, `assets/`, `robots.txt`, `sitemap.xml` before deployment.
6. Existing live Cloudflare Pages deployment remains untouched until the complete site is committed and secrets configured.
7. Use a scoped Cloudflare Pages Edit API token. Set production environment reviewers if available.
8. The repository is currently public. Avoid confidential vendor data, customer records or sensitive assets.

Operating model:
- Change corporate: commit to main.
- Change solutions: commit to solutions-production.
- Verify target project/domain before publishing.
