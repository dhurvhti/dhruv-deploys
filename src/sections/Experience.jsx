import Reveal from "../components/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">cat experience.log</p>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        {experience.map((job) => (
          <div className="bento job-bento" key={job.company}>
            <Reveal as="div" delay={80} className="panel c-3 job-meta">
              <span className="job-status mono">● active</span>
              <p className="job-range mono">{job.range}</p>
              <h3>{job.company}</h3>
              <p className="job-location">{job.location}</p>
            </Reveal>

            <Reveal as="div" delay={140} className="panel c-9 job-content">
              <h3>{job.title}</h3>
              <div className="job-tags">
                {job.tags.map((t) => (
                  <span className="tag-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <ul className="job-bullets">
                {job.bullets.map((b, bi) => (
                  <li key={bi}>
                    {b.pre}
                    <strong>{b.bold}</strong>
                    {b.post}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
