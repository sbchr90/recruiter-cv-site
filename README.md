# Recruiter-Focused CV Website

Single-page personal CV website for a principal-level Solutions Architect, built with Next.js and designed for recruiter evaluation.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Dynamic GitHub + YouTube sections with graceful fallbacks

## Run locally

1. Install Node.js 20+.
2. Install dependencies:
   - `npm install`
3. Optional: copy `.env.example` to `.env.local` and set `GITHUB_TOKEN`.
4. Start:
   - `npm run dev`

## Deploy

1. Push repository to GitHub.
2. Import the repo in Vercel.
3. Configure `GITHUB_TOKEN` in Vercel environment variables if needed.
4. Connect your custom domain.

## Content updates

Edit `src/content/site-content.ts` for profile, experience, projects, skills, featured repos, and videos.
