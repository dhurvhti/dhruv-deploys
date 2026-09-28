import { profile } from "../data/content";
import "./TopBar.css";

export default function TopBar({ theme, onToggleTheme, onOpenPalette }) {
  return (
    <nav className="topbar">
      <a className="topbar-logo" href="#top">
        dhruv<span className="topbar-cursor">_</span>
      </a>

      <div className="topbar-links">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
      </div>

      <div className="topbar-actions">
        <span className="status-pill">
          <span className="status-dot" />
          Open to work
        </span>
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? "☾" : "☀"}
        </button>
        <button className="icon-btn cmdk-trigger" onClick={onOpenPalette}>
          <span>⌘</span>K
        </button>
        <a className="pill-btn pill-btn--primary topbar-cta" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </div>
    </nav>
  );
}
