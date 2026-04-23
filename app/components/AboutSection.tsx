import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell">
          <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            About <span className="title-gradient">Me</span>
          </h2>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-500 p-1 shadow-[0_20px_80px_-40px_rgba(14,165,233,0.85)]">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.2rem] bg-white text-center dark:bg-slate-950/90">
                <BriefcaseBusiness className="mb-3 h-16 w-16 text-cyan-600 dark:text-cyan-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Builder Mode
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                  Product + Platform
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-bold text-slate-900 dark:text-white">
                Full-Stack Developer with a DevOps edge
              </h3>
              <p className="mb-5 leading-relaxed text-slate-600 dark:text-slate-300">
                I design and ship scalable applications from interface to infrastructure. My stack blends strong product engineering with clean architecture, so features stay fast and maintainable as they grow.
              </p>
              <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
                Recently I have been building healthcare workflows, real-time systems, and secure cloud deployments with Docker, AWS, and Azure while keeping the user experience sharp and reliable.
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-700 dark:text-slate-200">
                  <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                  India
                </div>
                <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-700 dark:text-slate-200">
                  <Calendar className="h-4 w-4 text-indigo-500" />
                  Open to full-time roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
