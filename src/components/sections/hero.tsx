import { Mail, Linkedin } from "lucide-react";
import { profile } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="section-shell pt-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.22em] text-sky-300">{profile.location}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {profile.title}
          <span className="ml-3 align-middle text-xl font-medium text-sky-200 md:text-3xl">({profile.titleQualifier})</span>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">{profile.headline}</p>
      </Reveal>
      <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.ctas.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2 font-medium text-slate-950 transition hover:shadow-glow"
        >
          <Linkedin size={18} />
          View LinkedIn Profile
        </a>
        <a href={profile.ctas.email} className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-slate-100 transition hover:border-slate-500">
          <Mail size={18} />
          Contact for Role Fit
        </a>
      </Reveal>
    </section>
  );
}
