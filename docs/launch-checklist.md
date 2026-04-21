# Launch Readiness Checklist

## Content quality

- Replace placeholder identity values in `src/content/site-content.ts`.
- Verify quantified outcomes in experience and project sections.
- Ensure featured repositories and videos are current and recruiter-relevant.

## SEO and metadata

- Update metadata title and description in `src/app/layout.tsx`.
- Add your canonical domain after DNS cutover.
- Add social preview image in `public/` and wire it in metadata.

## Accessibility

- Validate heading order and landmark structure.
- Verify keyboard navigation through links and CTAs.
- Confirm adequate color contrast and readable text sizes.
- Test reduced-motion experience if heavy animations are added later.

## Performance

- Keep hero section lightweight.
- Lazy-load media-heavy sections where possible.
- Validate Lighthouse in production and target strong Core Web Vitals.

## Analytics

- Add Plausible or GA4 script and verify pageview events.
- Track CTA clicks for LinkedIn and email interactions.

## Production validation

- Check mobile, tablet, and desktop layouts in production URL.
- Verify GitHub API behavior with and without token.
- Confirm custom domain, HTTPS, and redirect behavior.
