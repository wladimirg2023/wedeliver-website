# Wedeliver Website

Corporate website for Wedeliver Inc., built with Next.js, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Create `.env.local` with:

```text
RESEND_API_KEY=your_resend_api_key
```

The sending domain `wedeliver.ph` must be verified in Resend for the contact form to deliver email from `website@wedeliver.ph`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Vercel

Import the GitHub repository into Vercel and add `RESEND_API_KEY` under Project Settings → Environment Variables for Production, Preview and Development.
