import { projects } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white">Key Architecture Case Studies</h2>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-slate-800 bg-card/60 p-6">
              <h3 className="text-xl font-medium text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.architecture}</p>
              <p className="mt-3 text-slate-200">{project.outcome}</p>
              {project.githubRepo ? (
                <a
                  href={`https://github.com/${project.githubRepo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm text-sky-300 transition hover:text-sky-200"
                >
                  Linked repo: {project.githubRepo}
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
