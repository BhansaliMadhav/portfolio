import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const experience = [
  {
    title: "Software Developer Intern",
    company: "DefyD",
    period: "Apr 2025",
    description:
      "Revamped product website to boost retention by 50% and session time by 150%. Developed WhatsApp-based AI workflows, allowing users to perform actions directly in chat. Integrated AI to enable seamless automation without web navigation.",
  },
  {
    title: "Product Developer",
    company: "Asta Health Tech",
    period: "May 2025 to Present",
    description:
      "Built a hospital management system from a real-time patient monitoring demo. Implemented role-based access and secure login for hospital staff. Ensured data privacy using short-lived asymmetric encryption. Included modules for patient records, staff management, and communication workflows.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50/50 dark:bg-black/20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-white/5 border-gray-200/50 dark:border-white/10 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <Badge className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-transparent">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
