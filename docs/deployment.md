# Deployment and Hosting

## Architecture

- Runtime: Next.js App Router with static-first rendering.
- Delivery: Vercel edge network.
- Data fetch:
  - Local CV data from `src/content/site-content.ts`.
  - GitHub API data with one-hour ISR cache.
  - YouTube cards generated from curated IDs.

## Domain and DNS

1. Buy or use existing domain (recommended: `firstname-lastname.com`).
2. Connect domain in Vercel project settings.
3. Point DNS to Vercel nameservers or add required `A`/`CNAME` records.
4. Enable redirect from apex or `www` according to preference.

## CI/CD

1. Push to GitHub.
2. Import repository into Vercel.
3. Configure automatic production deployment from `main`.
4. Use preview deployments for each branch/PR.

## Environment variables

- `GITHUB_TOKEN` (optional, recommended)
  - Scope: read-only public repo metadata.
  - Purpose: increase rate limits and improve reliability.

## Operational notes

- If GitHub API is unavailable, the page still renders with fallback messaging.
- Keep featured repositories and video IDs curated for recruiter relevance.
