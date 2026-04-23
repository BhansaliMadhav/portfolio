import { Code, Database, Server, Cloud, Paintbrush } from "lucide-react";
import { Card } from "./ui/card";

const skills = [
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Prisma + PostgreSQL", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Docker", level: 75 },
  { name: "AWS / Azure", level: 70 },
  { name: "UI/UX + Tailwind CSS", level: 80 },
];

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building scalable, performant products with React, Remix, Next.js, and Node.js.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Modeling robust relational and NoSQL data layers using PostgreSQL, Prisma, and MongoDB.",
  },
  {
    icon: Server,
    title: "Real-Time Systems",
    description:
      "Shipping event-driven and WebSocket-powered features for fast collaboration flows.",
  },
  {
    icon: Cloud,
    title: "Cloud + DevOps",
    description:
      "Deploying with Docker, CI/CD, and cloud infrastructure across AWS and Azure.",
  },
  {
    icon: Paintbrush,
    title: "UX + Accessibility",
    description:
      "Designing clean interfaces that stay accessible, responsive, and conversion-focused.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell">
          <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Skills and <span className="title-gradient">Services</span>
          </h2>

          <div className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                <service.icon className="mb-4 h-10 w-10 text-cyan-600 transition-transform duration-300 group-hover:scale-105 dark:text-cyan-300" />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="glass-panel rounded-2xl p-4">
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
