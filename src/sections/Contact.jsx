import { useState } from "react";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

export default function Contact({ onReplay }) {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="section contact-section">
      <div className="container">
        <Reveal as="div" className="panel contact-panel">
          <p className="contact-prompt mono">
            <span className="terminal-prompt">$</span> ssh dhruv@available-for-work
            <span className="terminal-cursor" />
          </p>
          <h2 className="contact-headline">
            Let's build something <span className="accent-highlight">dependable</span> together.
          </h2>
          <p className="contact-sub">
            I'm looking for DevOps, Cloud, or Platform engineering roles where I
            can own infrastructure end-to-end. If that's you, my inbox is open.
          </p>
          <div className="contact-ctas">
            <a className="pill-btn pill-btn--primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="pill-btn pill-btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="footer-bar">
        <p className="mono">
          © {year} {profile.name} · {profile.role}
        </p>
        <button className="footer-replay" onClick={onReplay}>
          ↺ Replay intro
        </button>
        <p className="footer-links mono">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          · <a href={`mailto:${profile.email}`}>Email</a>
        </p>
      </div>
    </footer>
  );
}
