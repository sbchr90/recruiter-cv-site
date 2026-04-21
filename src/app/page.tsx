import { ContactSection } from "@/components/sections/contact";
import { DynamicProofSection } from "@/components/sections/dynamic-proof";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { SnapshotSection } from "@/components/sections/snapshot";
import { featuredRepos, featuredVideos, profile } from "@/content/site-content";
import { getFeaturedGitHubRepos, getFeaturedVideos } from "@/lib/apis";

export const revalidate = 3600;

export default async function HomePage() {
  const [repos, videos] = await Promise.all([getFeaturedGitHubRepos(featuredRepos), Promise.resolve(getFeaturedVideos(featuredVideos))]);
  const navItems = [
    { label: "Proof", href: "#proof" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <main className="bg-background">
      <header className="fixed left-0 right-0 top-0 z-10 border-b border-slate-900/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 md:px-10">
          <p className="font-medium text-slate-100">{profile.name}</p>
          <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={profile.ctas.email} className="text-sm text-sky-300 md:hidden">
            Contact
          </a>
        </div>
      </header>
      <HeroSection />
      <SnapshotSection />
      <DynamicProofSection repos={repos} videos={videos} />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
