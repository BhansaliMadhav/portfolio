import { Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Jarvis",
    description:
      "AI SaaS that lets users query PDFs using Hugging Face and Pinecone with Stripe-powered subscriptions.",
    tech: ["Next.js", "Node.js", "Hugging Face", "Pinecone", "Stripe"],
    github: "https://github.com/BhansaliMadhav/jarvis",
    demo: "https://jarvis-blush-ten.vercel.app/",
  },
  {
    title: "Stream It",
    description:
      "Streaming product with Clerk auth and SSR optimization, focused on engagement and retention improvements.",
    tech: ["Next.js", "Clerk", "Prisma", "Tailwind CSS", "LiveKit"],
    github: "https://github.com/BhansaliMadhav/StreamIt",
    demo: "https://stream-it-neon.vercel.app/",
  },
  {
    title: "Project Management App",
    description:
      "Task and timeline manager powered by AWS Cognito and a scalable Node backend deployed on AWS.",
    tech: ["Next.js", "AWS Cognito", "Node.js", "Tailwind CSS"],
    github: "https://github.com/BhansaliMadhav/ProjectManagementApp",
    demo: "https://main.d1e4buihxbnxer.amplifyapp.com/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="section-shell">
          <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Featured <span className="title-gradient">Projects</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100 dark:from-cyan-500/15 dark:via-sky-500/10 dark:to-indigo-500/15">
                  <div className="absolute h-36 w-36 rounded-full border border-cyan-300/80 dark:border-cyan-300/25" />
                  <div className="text-4xl font-black tracking-tight text-cyan-700 dark:text-cyan-300">
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="border-cyan-300/50 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="primary">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
