import characterAnim from "../assets/character-anim.webm";
import characterPoster from "../assets/character-poster.png";
import Terminal from "../components/Terminal";
import Reveal from "../components/Reveal";
import { profile, stats, marqueeWords } from "../data/content";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-intro">
        <Reveal>
          <p className="eyebrow">whoami</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="hero-title">
            DevOps engineer who automates the boring parts so production stays{" "}
            <span className="accent-highlight">reliable</span>.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="hero-sub">
            CI/CD pipelines, Terraform-provisioned cloud infrastructure, and
            Kubernetes workloads watched over by Prometheus and Grafana.
            Based in {profile.location}.
          </p>
        </Reveal>
      </div>

      <div className="bento hero-bento">
        <Reveal as="div" className="panel panel--hover c-4 profile-panel">
          <video
            className="profile-video"
            src={characterAnim}
            poster={characterPoster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="profile-info">
            <h3>{profile.name}</h3>
            <p className="profile-role">{profile.role}</p>
            <p className="profile-location mono">{profile.location}</p>
          </div>
          <div className="profile-ctas">
            <a className="pill-btn pill-btn--primary" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a
              className="pill-btn pill-btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal as="div" delay={100} className="panel c-8 r-2 terminal-panel">
          <Terminal />
        </Reveal>

        <Reveal as="div" delay={180} className="panel c-4 stats-panel">
          {stats.map((s) => (
            <div className="mini-stat" key={s.label}>
              <p className="mini-stat-value">
                {s.value}
                <span>{s.suffix}</span>
              </p>
              <p className="mini-stat-label">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" delay={240} className="panel c-12 marquee-panel">
          <div className="marquee">
            <div className="marquee-track">
              {[...marqueeWords, ...marqueeWords].map((w, i) => (
                <span className="marquee-item mono" key={`${w}-${i}`}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
