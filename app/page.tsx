/* eslint-disable @next/next/no-img-element -- static export serves pre-sized images as-is */
import type { CSSProperties } from "react";
import { asset } from "./asset";
import { categories, messageHref, reviews, socials, steps } from "./content";
import { Faq } from "./_components/Faq";
import { Header } from "./_components/Header";
import { HeroReady } from "./_components/HeroReady";
import { Reveal } from "./_components/Reveal";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Arrow({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 10h14M11.5 4.5 17 10l-5.5 5.5" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="vr">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="frame dark" aria-labelledby="h1">
          <div className="room" id="top">
            <img src={asset("/images/hero.jpg")} alt="" fetchPriority="high" decoding="async" />
            <div className="room-scrim" />
            <div className="room-copy">
              <a className="chip rise" href="#how" style={i(0)}>
                <b>72 hours</b>
                <span>From photos to payment →</span>
              </a>
              <h1 className="h1 gar" id="h1">
                <span className="ln" style={i(0)}>
                  <span>Sell your luxury,</span>
                </span>
                <span className="ln" style={i(1)}>
                  <span>
                    <em>quietly.</em>
                  </span>
                </span>
              </h1>
              <p className="lede rise" style={i(2)}>
                Get cash for your handbags, watches and jewellery within 72 hours. Shizuka collects, authenticates and gathers private
                offers on your behalf.
              </p>
              <div className="acts rise" style={i(3)}>
                <a className="pill pill-light" href={messageHref}>
                  Message us on WhatsApp
                </a>
                <a className="pill pill-ghost" href="#how">
                  How it works
                </a>
              </div>
            </div>
          </div>

          <div className="facts">
            <div className="fact" data-r="">
              <b>72 hours</b>
              <span>From your first message to cash in your account.</span>
            </div>
            <div className="fact" data-r="" style={d(40)}>
              <b>40+ years</b>
              <span>Three generations in luxury trading and auctions.</span>
            </div>
            <div className="fact" data-r="" style={d(80)}>
              <b>Commitment-free</b>
              <span>Change your mind before the sale and your piece comes back.</span>
            </div>
          </div>
        </section>

        <section className="statement wrap" aria-label="Our approach">
          <h2 className="gar" data-r="">
            Shizuka means ‘quiet’ in Japanese. <span>That’s how we do business.</span>
          </h2>
          <p data-r="" style={d(40)}>
            Shivam Agarwal, Founder &amp; CEO
          </p>
        </section>

        <section className="wrap proc" id="how" aria-labelledby="how-h">
          <div className="proc-h" data-r="">
            <h2 className="gar" id="how-h">
              How it works
            </h2>
            <p>Start with a few photos. We manage the rest and bring you the best possible trade price.</p>
            <a className="pill pill-dark" href={messageHref}>
              Get a free valuation
            </a>
          </div>
          <ol className="rows" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((step, n) => (
              <li className="row" data-r="" style={d(n * 40)} key={step.title}>
                <span className="n">{String(n + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <Arrow />
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap cats-sec" id="buy" aria-labelledby="buy-h">
          <div className="sec-head" data-r="">
            <h2 className="gar" id="buy-h">
              We buy your:
            </h2>
            <a className="pill pill-line" href={messageHref}>
              Ask about your piece
            </a>
          </div>
          <div className="cards">
            {categories.map((cat, n) => (
              <a className="card" href={messageHref} data-r="" style={d(n * 40)} key={cat.label}>
                <img src={asset(cat.image)} alt="" loading="lazy" decoding="async" />
                <div className="card-cap">
                  <strong>{cat.label}</strong>
                  <span>
                    <Arrow size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap founder" id="about" aria-label="From our founder">
          <div className="fcard dark" data-r="">
            <img className="band" src={asset("/images/founder-band.jpg")} alt="Shivam Agarwal, founder and CEO of Shizuka Luxury" loading="lazy" decoding="async" />
            <img className="portrait" src={asset("/images/founder-portrait.jpg")} alt="" loading="lazy" decoding="async" />
            <div className="fscrim" />
            <figure className="fcopy" style={{ margin: 0 }}>
              <blockquote>
                “Shizuka was created because I saw the need for a quick, discreet trading platform…
                <span>…perfect for my clients who wish to maintain their privacy and release funds at the moment they’re needed.”</span>
              </blockquote>
              <figcaption className="sig">
                <i>Shivam Agarwal</i>
                <small>Founder &amp; CEO</small>
              </figcaption>
              <a className="pill pill-ghost" href="#about">
                About us
              </a>
            </figure>
          </div>
        </section>

        <section className="wrap eff" aria-labelledby="eff-h">
          <div className="eff-grid">
            <div className="eff-photo" data-r="">
              <img src={asset("/images/chauffeur-crop.jpg")} alt="A Shizuka chauffeur in a dark suit waiting beside a black car" loading="lazy" decoding="async" />
            </div>
            <div data-r="" style={d(60)}>
              <h2 className="gar" id="eff-h">
                Selling can be <em>effortless.</em>
              </h2>
              <p className="eff-lede">Nothing to carry, nowhere to go. It couldn’t be simpler.</p>
              <ul className="promises">
                <li>
                  <Check />
                  <div>
                    <b>Collected by a chauffeur</b>
                    <span>Your luxury pieces are collected by a chauffeur in white gloves.</span>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <b>Safely stored</b>
                    <span>Your pieces are kept safe while your account manager gathers bids.</span>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <b>No waiting, no complaints</b>
                    <span>No long wait for a sale. No post-sale complaints.</span>
                  </div>
                </li>
              </ul>
              <a className="pill pill-dark" href={messageHref}>
                Get a free valuation
              </a>
            </div>
          </div>
        </section>

        <section className="rev" aria-labelledby="rev-h">
          <div className="wrap">
            <h2 className="gar" id="rev-h" data-r="">
              What clients say after a private sale.
            </h2>
            <p className="rev-note" data-r="" style={d(40)}>
              Sample reviews, shown for layout.
            </p>
            <div className="rev-grid">
              {reviews.map((r, n) => (
                <figure className={n === 0 ? "rq on" : "rq"} style={{ margin: 0, ...d(n * 40) }} data-r="" key={r.item}>
                  <blockquote>{r.quote}</blockquote>
                  <p>
                    <span>
                      <b>{r.name}</b>
                      {r.item}
                    </span>
                  </p>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-h">
          <div className="faq-h" data-r="">
            <h2 className="gar" id="faq-h">
              Questions, answered.
            </h2>
            <p>Straight answers about valuation, collection and payment. Anything else, ask us on WhatsApp.</p>
            <a className="pill pill-line" href={messageHref}>
              Ask on WhatsApp
            </a>
          </div>
          <Faq />
        </section>

        <section className="wrap cta" aria-labelledby="cta-h">
          <div className="cta-in">
            <h2 className="gar" id="cta-h" data-r="">
              Start your <em style={{ fontStyle: "italic" }}>private</em> sale.
            </h2>
            <p data-r="" style={d(40)}>
              Send a few photographs and get a valuation range. Our buyers are waiting to bid on your piece.
            </p>
            <div className="acts" data-r="" style={d(80)}>
              <a className="pill pill-dark" href={messageHref}>
                Message us on WhatsApp
              </a>
              <a className="pill pill-line" href="#faq">
                Read the FAQs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ft dark" id="contact">
        <div className="wrap">
          <nav aria-label="Footer">
            <a href="#how">How it works</a>
            <a href="#buy">What we buy</a>
            <a href="#about">About us</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="acts">
            <a className="pill pill-light" href={messageHref}>
              Message us
            </a>
          </div>
          <div className="ft-base">
            <span>[Street address], DIFC, Dubai, UAE · +971 [phone number]</span>
            <div>
              <a href="#contact">Privacy</a>
              <a href="#contact">Terms &amp; Conditions</a>
              <a href={socials.linkedin}>LinkedIn</a>
              <a href={socials.instagram}>Instagram</a>
            </div>
            <span>© 2026 Shizuka Luxury</span>
          </div>
        </div>
      </footer>
      <HeroReady selector=".room" />
      <Reveal root=".vr" />
    </div>
  );
}
