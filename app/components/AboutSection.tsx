import { MapPin, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-1">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Full-Stack Developer | DevOps Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I&apos;m a developer deeply invested in building scalable and
              maintainable web applications. I work across the stack — from
              designing performant UIs with Remix and Next.js, to crafting
              robust backend systems using Prisma, PostgreSQL, and Node.js.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Lately, I’ve been working on healthcare tech, integrating complex
              systems and implementing real-time features. I’m equally
              passionate about DevOps — deploying apps using Docker, and
              managing infrastructure on AWS and Azure.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="mr-2 h-4 w-4" />
                India
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="mr-2 h-4 w-4" />
                Available for Full-Time Roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
