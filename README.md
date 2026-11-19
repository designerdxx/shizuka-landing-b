# Shizuka Luxury: landing page, Direction B "The private viewing room"

An alternative design direction for the Shizuka Luxury landing page, inspired by Amperos and Collins: a deep-brown frame around an inset, rounded hero photo, centred serif statements, hairline process rows that turn dark on hover, and a deep footer with stacked serif links.

Stack: Next.js 16 (App Router, static export), plain CSS, `next/font` (EB Garamond + Hanken Grotesk).

## Live preview

https://designerdxx.github.io/shizuka-landing-b/

Every push to `main` rebuilds and redeploys through GitHub Actions (`.github/workflows/deploy.yml`). The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repository name, because Pages serves the site from `/<repo>/`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `env.example` to `.env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, international format). Until it is set, every "Message us" button scrolls to the footer. `NEXT_PUBLIC_LINKEDIN_URL` and `NEXT_PUBLIC_INSTAGRAM_URL` fill the footer links.

## Where things live

- Copy: `app/content.ts` and `app/page.tsx`
- Header, phone menu and scroll behaviour: `app/_components/Header.tsx`
- All styles and motion: `app/globals.css`

## Motion: "the frame opens"

- **Load:** the hero waits until its photo has decoded (at most 1.5s), then the photo's inset frame widens and its corners tighten (1.4s, ease-out) while the photo settles from 1.08 to 1. The headline lines rise 45ms apart, then the subline and buttons.
- **Header:** slides away while you read down (240ms, ease-in) and returns on the first scroll up (280ms, ease-out).
- **Sections:** reveal once as they enter, a 16px rise and fade, 40ms between items. Anything already on screen at load stays as rendered, so nothing competes with the hero.
- **Hover and press:** buttons get a fill wipe (280ms in, 200ms out) and press to 0.98; process rows turn deep brown in 200ms; category photos zoom 1.03 (280ms in, 200ms out) and press to 0.99.
- **Phone menu:** a full-screen deep panel; 44px serif links rise 40ms apart; the page behind is locked and Escape closes it.
- **Reduced motion:** no movement, only fades, and no smooth scrolling.

Audited against the 12 principles of animation: everything a click or hover starts finishes within 300ms, entrances ease out, exits ease in, staggers stay at or under 50ms, and every control has a pressed state.

## Still needed from the client

- WhatsApp number and pre-filled message.
- Real testimonials. The review cards are labelled placeholders; don't replace them with invented quotes.
- Office address, phone number, LinkedIn and Instagram URLs.
- What the "72 hours" claim is subject to.
- Confirmation that the chauffeur photo may be used (its Figma layer name suggests it is AI-generated).
