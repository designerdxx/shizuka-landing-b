"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../asset";
import { messageHref, nav } from "../content";

/**
 * Sticky header that slides away while reading down and returns on the first scroll up
 * (out: 240ms ease-in, back: 280ms ease-out), plus the full-screen phone menu.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 160);
          lastY.current = y;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="top" data-open={open || undefined} data-hidden={(hidden && !open) || undefined}>
        <a href="#top" className="logo" aria-label="Shizuka Luxury, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/logo-light.svg")} alt="" width={101} height={34} />
        </a>
        <nav className="tnav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="pill pill-light" href={messageHref}>
          Message us
        </a>
        <button
          ref={burger}
          className="burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="b">
            <span />
            <span />
          </span>
        </button>
      </header>

      <div className="over" id="menu" data-open={open || undefined} aria-hidden={!open} inert={!open}>
        {nav.map((item, i) => (
          <a key={item.href} className="big" href={item.href} style={{ "--i": i } as React.CSSProperties} onClick={close}>
            {item.label}
          </a>
        ))}
        <div className="foot">
          <p>Message for a fast and free valuation on your item.</p>
          <div>
            <a className="pill pill-light" href={messageHref} onClick={close}>
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
