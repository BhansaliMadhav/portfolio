import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href="mailto:bhansalimadhav03@gmail.com">
            <Button size="lg" variant="primary">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </a>
          <div className="flex items-center gap-4">
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

        <div className="text-gray-500 dark:text-gray-400">
          <p>bhansalimadhav03@gmail.com • +91 7219544309</p>
        </div>
      </div>
    </section>
  );
}
