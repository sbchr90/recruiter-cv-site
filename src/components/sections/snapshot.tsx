import { profile } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function SnapshotSection() {
  return (
    <section className="section-shell pt-6">
      <Reveal>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {profile.snapshot.map((item, index) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-card/60 p-5">
                <p className="text-2xl font-semibold text-white lg:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                <span className="mt-4 block h-px w-full bg-gradient-to-r from-sky-400/70 to-transparent" style={{ opacity: 0.4 + index * 0.1 }} />
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-sky-400/30 bg-sky-400/10 p-4 text-sm text-sky-100">
            {profile.recentRecognition}{" "}
            <a
              href={profile.recentRecognitionUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-sky-200/80 underline-offset-2 transition hover:text-white"
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
      </Reveal>
    </section>
  );
}
