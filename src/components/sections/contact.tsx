import { profile } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-24">
      <Reveal>
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">Recruiter and Hiring Team Contact</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Evaluating principal-level architecture talent for zero trust, AI security, or strategic specialist roles? Reach out for a focused role-fit conversation and relevant enterprise examples.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={profile.ctas.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-sky-400 px-5 py-2 font-medium text-slate-950">
              Message on LinkedIn
            </a>
            <a href={profile.ctas.email} className="rounded-full border border-slate-700 px-5 py-2 text-slate-100">
              Email for Interview Discussion
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
