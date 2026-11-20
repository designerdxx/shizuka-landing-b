"use client";

import { useState } from "react";
import { faqs } from "../content";

/** Accordion: one answer open at a time. The hairline plus turns half a turn into a minus (260ms in, 180ms out). */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="qa">
      {faqs.map((item, k) => (
        <li key={item.q} className={k === open ? "on" : undefined} data-r="">
          <h3>
            <button type="button" id={`q${k}`} aria-expanded={k === open} aria-controls={`a${k}`} onClick={() => setOpen(k === open ? -1 : k)}>
              <span>{item.q}</span>
              <i className="ico" aria-hidden="true">
                <span />
                <span />
              </i>
            </button>
          </h3>
          <div className="ans" id={`a${k}`} role="region" aria-labelledby={`q${k}`}>
            <div>
              <p>{item.a}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
