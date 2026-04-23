import { ChevronDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import TextType from "./TextType";
import DecryptedText from "./DecryptedText";
import { WavyBackground } from "~/components/ui/wavy-background";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <WavyBackground
      backgroundFill="#f3fafe"
      colors={["#06b6d4", "#0284c7", "#0ea5e9", "#6366f1"]}
      waveWidth={52}
      blur={8}
      speed="fast"
      waveOpacity={0.4}
      containerClassName="w-full"
      className="inset-0 flex items-center justify-center"
    >
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 sm:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent dark:from-slate-900/20" />

        <div className="section-shell relative z-10 mx-auto w-full max-w-5xl text-center">
          <div className="stagger-children space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              Full Stack Engineer
            </p>

            <div>
              <TextType
                as={"h1"}
                text={["Hi, I'm"]}
                showCursor={false}
                pauseDuration={1000}
                textColors={["#0f172a"]}
                className="text-5xl font-extrabold leading-tight md:text-7xl"
              />
              <TextType
                as={"h1"}
                text={" Madhav"}
                textColors={["#0ea5e9"]}
                className="title-gradient text-5xl font-extrabold leading-tight md:text-7xl"
                showCursor={true}
                hideCursorWhileTyping={true}
                cursorCharacter={"_"}
                initialDelay={200}
                pauseDuration={1200}
              />
            </div>

            <h2>
              <DecryptedText
                text="I build production-grade web products that scale, perform, and convert."
                className="text-lg font-medium text-slate-700 dark:text-slate-100 md:text-2xl"
                speed={20}
                maxIterations={25}
                animateOn="view"
                encryptedClassName="text-slate-400 dark:text-slate-500"
                parentClassName="mx-auto block max-w-3xl"
                sequential={true}
              />
            </h2>

            <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
              Remix, Next.js, Node.js, and cloud-native delivery with an obsession for clean UX and measurable impact.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="primary"
              >
                View My Work
              </Button>
              <a href="/Madhav_Vijay_Bhansali_Resume.pdf" download={true}>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow rounded-full border border-white/70 bg-white/80 p-2 text-cyan-700 shadow-md dark:border-white/15 dark:bg-white/5 dark:text-cyan-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={28} />
        </button>
      </section>
    </WavyBackground>
  );
}
