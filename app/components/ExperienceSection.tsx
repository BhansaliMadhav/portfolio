import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const experience = [
  {
    title: "Associate Software Developer",
    company: "Taggd",
    period: "Nov 2025 to Present",
    description:
      "Optimized product query performance and introduced backend architectural improvements to enhance scalability and response times, while delivering a clean, minimal, and aesthetically refined frontend experience.",
  },
  {
    title: "Product Developer",
    company: "Asta Health Tech",
    period: "Feb 2025 to Oct 2025",
    description:
      "Built a hospital management platform from a real-time patient monitoring prototype. Implemented role-based access, secure login, and core modules for patient records, staff management, and communication workflows.",
  },
  
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="section-shell">
          <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Work <span className="title-gradient">Experience</span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={`${exp.company}-${exp.title}`} className="relative overflow-hidden p-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-indigo-500" />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Role {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-base font-semibold text-cyan-700 dark:text-cyan-300">
                      {exp.company}
                    </p>
                  </div>
                  {exp.period && (
                    <Badge className="border-indigo-300/60 bg-indigo-50 px-3 py-1 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
                      {exp.period}
                    </Badge>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
