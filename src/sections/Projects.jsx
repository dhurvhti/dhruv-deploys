import Reveal from "../components/Reveal";
import { projects } from "../data/content";

const ACCENTS = ["accent", "accent-2", "accent-purple"];

function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
  e.currentTarget.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">ls ./projects</p>
          <h2 className="section-title">Things I've built</h2>
        </Reveal>

        <div className="bento project-bento">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              delay={i * 90}
              key={p.index}
              className={`panel panel--hover project-panel ${p.featured ? "project-panel--featured c-12" : "c-6"}`}
              onMouseMove={p.featured ? handleSpotlight : undefined}
            >
              {p.featured && (
                <div className="project-chrome">
                  <span className="project-dot project-dot--a" />
                  <span className="project-dot project-dot--b" />
                  <span className="project-dot project-dot--c" />
                  <span className="project-chrome-label mono">cat ./projects/{p.index}.yml</span>
                </div>
              )}
              {p.featured && (
                <span className="project-ghost-index" aria-hidden="true">
                  {p.index}
                </span>
              )}
              <div className="project-head">
                <span className="project-index mono">{p.index}</span>
                <p className="project-eyebrow mono">{p.eyebrow}</p>
              </div>
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-metrics">
                {p.tiles.map((tile, ti) => (
                  <div
                    className={`metric-chip metric-chip--${ACCENTS[ti % ACCENTS.length]}`}
                    key={tile.label}
                  >
                    <p className="metric-label mono">{tile.label}</p>
                    <p className="metric-value">{tile.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
