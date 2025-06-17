import { Code, Database, Server, Cloud, Paintbrush } from "lucide-react";
import { Card } from "./ui/card";

const skills = [
  { name: "TypeScript / Javascript", level: 90 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Prisma & PostgreSQL", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Docker", level: 75 },
  { name: "AWS / Azure", level: 70 },
  { name: "UI/UX & Tailwind CSS", level: 80 },
];

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building scalable, performant, and maintainable applications using React, Remix, and Node.js.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "Designing and managing relational and NoSQL databases using PostgreSQL, Prisma ORM, and MongoDB.",
  },
  {
    icon: Server,
    title: "Real-Time Systems",
    description:
      "Implementing WebSockets and event-driven architecture for live dashboards and sync features.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying applications using Docker, CI/CD pipelines, and managing cloud infrastructure on AWS & Azure.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX & Accessibility",
    description:
      "Crafting clean, responsive, and accessible UIs with Tailwind CSS, ShadCN, and design best practices.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-white/5 border-gray-200/50 dark:border-white/10 backdrop-blur-sm"
            >
              <div className="p-6">
                <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-gray-900 dark:text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
