import { Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Jarvis",
    description:
      "SaaS platform for querying PDFs using AI via Hugging Face and Pinecone. Integrated Stripe for tiered pricing, built with Next.js and Node.js.",
    tech: ["Next.js", "Node.js", "Hugging Face", "Pinecone", "Stripe"],
    github: "https://github.com/BhansaliMadhav/jarvis", // Replace with actual repo if different
    demo: "https://jarvis-blush-ten.vercel.app/",
  },
  {
    title: "Stream It",
    description:
      "Streaming platform using Next.js and Clerk Auth with SSR optimization. Implemented UI/UX enhancements to improve user retention.",
    tech: ["Next.js", "Clerk", "Prisma", "Tailwind CSS", "Livekit"],
    github: "https://github.com/BhansaliMadhav/StreamIt", // Replace with actual repo if different
    demo: "https://stream-it-neon.vercel.app/",
  },
  {
    title: "Project Management App",
    description:
      "Timeline and task management application using Next.js, AWS Cognito, and a scalable Node.js backend deployed on AWS.",
    tech: ["Next.js", "AWS Cognito", "Node.js", "Tailwind CSS"],
    github: "https://github.com/BhansaliMadhav/ProjectManagementApp", // Replace with actual repo
    demo: "https://main.d1e4buihxbnxer.amplifyapp.com/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-white/5 border-gray-200/50 dark:border-white/10 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-t-lg flex items-center justify-center">
                <div className="text-6xl opacity-50">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="primary">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
