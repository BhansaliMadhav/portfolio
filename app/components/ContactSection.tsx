import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="section-shell text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Let&apos;s Build Something <span className="title-gradient">Great</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Open to ambitious teams, product-focused roles, and meaningful full-stack challenges.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href="mailto:bhansalimadhav03@gmail.com">
              <Button size="lg" variant="primary">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/BhansaliMadhav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/madhav-bhansali-649261252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2 text-sm font-medium text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300">
            <span>bhansalimadhav03@gmail.com</span>
            <span className="text-slate-400">|</span>
            <span>+91 8149350565</span>
          </div>
        </div>
      </div>
    </section>
  );
}
