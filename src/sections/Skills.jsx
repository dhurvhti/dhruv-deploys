import Reveal from "../components/Reveal";
import { toolchain, education, focusAreas } from "../data/content";

export default function Skills() {
  const cgpaPct = (education.cgpa / 10) * 100;

  return (
    <section className="section" id="stack">
      <div className="container">
        <Reveal>
          <p className="eyebrow">cat stack.yml</p>
          <h2 className="section-title">Comfortable owning it end to end</h2>
        </Reveal>

        <div className="bento toolchain-bento">
          {toolchain.map((group, i) => (
            <Reveal as="div" delay={i * 70} className="panel c-3 toolchain-card" key={group.group}>
              <p className="toolchain-label mono">
                <span className="toolchain-dot" style={{ background: group.color }} />
                {group.group}
              </p>
              <div className="toolchain-items">
                {group.items.map((item) => (
                  <span className="tag-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="bento lower-bento">
          <Reveal as="div" delay={100} className="panel c-6 info-card">
            <p className="eyebrow">cat education.json</p>
            <div className="education-row">
              <div>
                <h3>{education.school}</h3>
                <p className="education-degree">{education.degree}</p>
                <p className="education-meta mono">
                  {education.location} · {education.date}
                </p>
              </div>
              <div className="education-score mono">
                {education.cgpa}
                <span>/10</span>
              </div>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${cgpaPct}%` }} />
            </div>
          </Reveal>

          <Reveal as="div" delay={160} className="panel c-6 info-card">
            <p className="eyebrow">cat focus.md</p>
            <ul className="focus-list">
              {focusAreas.map((item, i) => (
                <li key={i}>
                  <span className="focus-index mono">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
