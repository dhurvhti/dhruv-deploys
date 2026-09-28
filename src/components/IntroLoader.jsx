import { useEffect, useState } from "react";
import characterPoster from "../assets/character-poster.png";
import characterAnim from "../assets/character-anim.webm";
import "./IntroLoader.css";

const GREETINGS = ["Hello", "Namaste", "Hola", "Bonjour", "こんにちは"];
const DURATION = 5700;

export default function IntroLoader({ onFinish, name = "Dhruv Khalasi" }) {
  const [progress, setProgress] = useState(0);
  const [greetIndex, setGreetIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLeaving(true), 250);
        setTimeout(() => onFinish?.(), 850);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  useEffect(() => {
    const id = setInterval(() => {
      setGreetIndex((i) => (i + 1) % GREETINGS.length);
    }, 480);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`intro${leaving ? " intro--leaving" : ""}`}>
      <div className="intro-badge">
        <span className="intro-dot" />
        {name}
      </div>

      <div className="intro-character">
        <video
          className="intro-character-video"
          src={characterAnim}
          poster={characterPoster}
          autoPlay
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      <div className="intro-greeting">
        <h1>
          {GREETINGS[greetIndex]} <span className="intro-wave">👋</span>
        </h1>
        <p>SPINNING UP THE ENVIRONMENT</p>
      </div>

      <div className="intro-progress">
        {progress}
        <span>%</span>
      </div>

      <div className="intro-bar">
        <div className="intro-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
