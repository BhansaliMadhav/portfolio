import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-3 z-50 w-full px-3 sm:px-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/75 px-4 py-3 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.75)] backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/65">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold tracking-tight"
          aria-label="Go to home"
        >
          Madhav <span className="title-gradient">Portfolio</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold tracking-wide text-slate-700 transition-colors duration-300 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="text-slate-700 md:hidden dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/92 md:hidden">
          <div className="space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
