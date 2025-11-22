import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-glow to-glow-secondary",
    },
    {
      title: "Healthcare Management System",
      description: "Digital transformation for healthcare providers with patient records, appointment scheduling, and telemedicine features.",
      tags: ["Next.js", "TypeScript", "MongoDB", "AWS"],
      gradient: "from-glow-secondary to-glow",
    },
    {
      title: "Educational Platform",
      description: "Interactive learning platform with video courses, assessments, and progress tracking for students worldwide.",
      tags: ["React", "Python", "PostgreSQL", "WebRTC"],
      gradient: "from-glow to-glow-secondary",
    },
    {
      title: "Business Analytics Dashboard",
      description: "Real-time business intelligence dashboard with data visualization and automated reporting capabilities.",
      tags: ["React", "D3.js", "Node.js", "Redis"],
      gradient: "from-glow-secondary to-glow",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Transforming ideas into impactful digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-glow bg-card border-border hover:border-glow/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-glow transition-colors" />
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm" className="group/btn">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:text-glow transition-colors" />
                    Source
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
