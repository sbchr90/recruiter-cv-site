import { experiences } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell scroll-mt-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white">Experience and Outcomes</h2>
      </Reveal>
      <div className="mt-8 space-y-6 border-l border-slate-800 pl-6">
        {experiences.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}-${item.period}`} delay={index * 0.05}>
            <article className="rounded-xl border border-slate-800 bg-card/60 p-6">
              <p className="text-sm uppercase tracking-wide text-sky-300">{item.period}</p>
              <h3 className="mt-2 text-xl font-medium text-white">
                {item.role} · {item.company}
              </h3>
              {item.achievements?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.achievements.map((achievement) => (
                    <span key={achievement} className="rounded-md border border-sky-300/40 bg-sky-400/10 px-2.5 py-1.5 text-xs font-medium text-sky-100">
                      {achievement}
                    </span>
                  ))}
                </div>
              ) : null}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-sky-300">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
