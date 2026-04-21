import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { featuredRepoSummaries, featuredTalks } from "@/content/site-content";
import type { RepoCard, VideoCard } from "@/lib/apis";

type DynamicProofProps = {
  repos: RepoCard[];
  videos: VideoCard[];
};

export function DynamicProofSection({ repos, videos }: DynamicProofProps) {
  const repoSummaryMap = new Map(featuredRepoSummaries.map((item) => [item.fullName, item.summary]));

  return (
    <section id="proof" className="section-shell scroll-mt-24">
      <Reveal>
        <h2 className="text-3xl font-semibold text-white">Dynamic Proof of Execution</h2>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="text-xl text-sky-300">Featured GitHub Work</h3>
            <div className="mt-4 space-y-4">
              {repos.length > 0 ? (
                repos.map((repo) => (
                  <a key={repo.fullName} href={repo.url} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-800 bg-card/60 p-4 transition hover:border-sky-400/40">
                    <p className="font-medium text-white">{repo.fullName}</p>
                    <p className="mt-1 text-sm text-slate-300">{repoSummaryMap.get(repo.fullName) ?? repo.description}</p>
                    <p className="mt-2 text-xs text-slate-400">Stars: {repo.stars} · Forks: {repo.forks}</p>
                  </a>
                ))
              ) : (
                <div className="rounded-xl border border-slate-800 bg-card/60 p-4 text-sm text-slate-300">GitHub data currently unavailable. Curated project cards are still shown above.</div>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h3 className="text-xl text-sky-300">Featured Talks and Videos</h3>
            <div className="mt-4 space-y-4">
              {videos.length > 0 ? (
                videos.map((video) => (
                  <a key={video.id} href={video.embedUrl.replace("/embed/", "/watch?v=")} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-slate-800 bg-card/60">
                    <Image src={video.thumbnailUrl} alt={video.title} width={640} height={360} className="h-auto w-full object-cover" />
                    <p className="p-4 text-sm text-slate-100">{video.title}</p>
                  </a>
                ))
              ) : (
                <div className="rounded-xl border border-slate-800 bg-card/60 p-4 text-sm text-slate-300">
                  Video highlights can be added here when public talks or recordings are available.
                </div>
              )}
            </div>
            <div className="mt-6 space-y-3">
              {featuredTalks.map((talk) => (
                <a key={talk.url} href={talk.url} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-800 bg-card/40 p-4 transition hover:border-sky-400/40">
                  {talk.image ? (
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      width={1200}
                      height={675}
                      className="mb-3 h-auto w-full rounded-lg border border-slate-700 object-cover"
                    />
                  ) : null}
                  <p className="text-sm font-medium text-white">{talk.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{talk.event}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
