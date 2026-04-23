import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";

import { Navigation } from "~/components/Navigation";
import { HeroSection } from "~/components/HeroSection";
import { AboutSection } from "~/components/AboutSection";
import { SkillsSection } from "~/components/SkillSection";
import { ProjectsSection } from "~/components/ProjectSection";
import { ExperienceSection } from "~/components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "~/components/Footer";
import { getThemeSession } from "~/utils/theme-server";

export const meta: MetaFunction = () => {
  return [
    { title: "Madhav Vijay Bhansali - Full Stack Developer" },
    {
      name: "description",
      content:
        "Full Stack Developer & Enthusiast Devops user creating amazing digital experiences",
    },
    {
      name: "keywords",
      content:
        "developer, portfolio, react, typescript, full stack, nextjs, AWS",
    },
    {
      property: "og:title",
      content: "Madhav Portfolio - Full Stack Developer",
    },
    {
      property: "og:description",
      content: "Full Stack Developer creating amazing digital experiences",
    },
    { property: "og:type", content: "website" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const themeSession = await getThemeSession(request);
  const formData = await request.formData();
  const theme = formData.get("theme");

  if (theme === "light" || theme === "dark") {
    themeSession.setTheme("light");
    return Response.json(
      { success: true },
      { headers: { "Set-Cookie": await themeSession.commit() } }
    );
  }

  return Response.json({ success: false });
}

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-4">
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute -right-24 top-[35rem] h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl dark:bg-indigo-500/15" />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
