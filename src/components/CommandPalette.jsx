import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../data/content";
import "./CommandPalette.css";

export default function CommandPalette({ open, setOpen, onToggleTheme, onReplayIntro }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = useMemo(
    () => [
      {
        id: "work",
        label: "Go to Work",
        hint: "Experience",
        run: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "projects",
        label: "Go to Projects",
        hint: "Things I've built",
        run: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "stack",
        label: "Go to Stack",
        hint: "Toolchain",
        run: () => document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "top",
        label: "Go to Top",
        hint: "Hero",
        run: () => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "email",
        label: "Copy Email Address",
        hint: profile.email,
        run: () => {
          navigator.clipboard?.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        },
      },
      {
        id: "mailto",
        label: "Send an Email",
        hint: "Opens mail client",
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: profile.linkedin.replace("https://", ""),
        run: () => window.open(profile.linkedin, "_blank", "noreferrer"),
      },
      {
        id: "theme",
        label: "Toggle Light / Dark Theme",
        hint: "⌘K friendly",
        run: () => onToggleTheme?.(),
      },
      {
        id: "replay",
        label: "Replay Intro Animation",
        hint: "Loading sequence",
        run: () => onReplayIntro?.(),
      },
    ],
    [onToggleTheme, onReplayIntro]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isK = e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey);
      if (isK) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setActiveIndex(0);
  };

  const runAction = (action) => {
    action.run();
    setOpen(false);
  };

  const onKeyDownList = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) runAction(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk-backdrop" onClick={() => setOpen(false)}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input-row">
          <span className="cmdk-prompt">$</span>
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Type a command or search…"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={onKeyDownList}
          />
          <span className="cmdk-esc">ESC</span>
        </div>
        <div className="cmdk-list">
          {filtered.length === 0 && <p className="cmdk-empty">No matching commands.</p>}
          {filtered.map((action, i) => (
            <button
              key={action.id}
              className={`cmdk-item${i === activeIndex ? " is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => runAction(action)}
            >
              <span>{action.label}</span>
              <span className="cmdk-hint">
                {action.id === "email" && copied ? "Copied!" : action.hint}
              </span>
            </button>
          ))}
        </div>
        <div className="cmdk-footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
