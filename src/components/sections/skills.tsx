import { skills } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white">Capabilities Map</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {skills.map((cluster, index) => (
          <Reveal key={cluster.area} delay={index * 0.08}>
            <article className="rounded-2xl border border-slate-800 bg-card/60 p-5">
              <h3 className="text-lg font-medium text-sky-300">{cluster.area}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
