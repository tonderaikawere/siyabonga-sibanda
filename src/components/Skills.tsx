import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Palette, Smartphone, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "glow",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
      color: "glow-secondary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Git"],
      color: "glow",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "User Research", "Prototyping"],
      color: "glow-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Progressive Web Apps", "Cross-platform"],
      color: "glow",
    },
    {
      icon: Workflow,
      title: "Project Management",
      skills: ["Agile", "Scrum", "Team Leadership", "Client Relations"],
      color: "glow-secondary",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="glow-text">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 card-glow bg-card border-border hover:border-glow/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-${category.color}/10 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
