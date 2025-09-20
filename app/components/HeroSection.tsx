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
      backgroundFill="#f5f5f5"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9"]}
      waveWidth={50}
      blur={10}
      speed="fast"
      waveOpacity={0.5}
      containerClassName="h-full w-full"
      className="flex items-center justify-center inset-0"
    >
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent"
      >
        {/*<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-blue-600/20 dark:to-cyan-600/20" />*/}
        <div className="relative z-10 text-center px-4">
          <TextType
            as={"h1"}
            text={["Hi, I'm"]}
            showCursor={false}
            pauseDuration={1000}
            textColors={["gray-900"]}
            className="text-5xl md:text-7xl font-bold"
          />
          <TextType
            as={"h1"}
            text={" Madhav"}
            textColors={["cyan-500"]}
            className="text-5xl md:text-7xl font-bold text-blue-500"
            showCursor={true}
            hideCursorWhileTyping={true}
            cursorCharacter={"_"}
            initialDelay={200}
            pauseDuration={1200}
          />

          <h1>
            <DecryptedText
              text="Full Stack Developer & Devops Enthusiast creating amazing digital experiences"
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto revealed"
              speed={20}
              maxIterations={25}
              animateOn="view"
              encryptedClassName="encrypted"
              parentClassName="all-letters"
              sequential={true}
            />
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-500 dark:text-white/60" size={32} />
        </div>
      </section>
    </WavyBackground>
  );
}
