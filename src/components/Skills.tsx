import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Palette, Smartphone, Workflow } from "lucide-react";
import { motion, Variants } from "framer-motion";
import React from "react";

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

  // Define variants for the animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills &amp; <span className="glow-text">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building innovative digital solutions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
              >
                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 border border-border/50 h-full"
                  style={{
                    boxShadow: `0 10px 15px -3px rgba(var(--${category.color}), 0.1)`,
                    borderColor: `rgba(var(--${category.color}), 0.3)`,
                    borderWidth: '1px'
                  } as React.CSSProperties}
                >
                  <div className="flex flex-col h-full">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div 
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `rgba(var(--${category.color}), 0.1)`,
                          color: `rgb(var(--${category.color}))`
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </motion.div>
                    <motion.div 
                      className="flex flex-wrap gap-2 mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                    >
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full border"
                          style={{
                            backgroundColor: `rgba(var(--${category.color}), 0.1)`,
                            color: `rgb(var(--${category.color}))`,
                            borderColor: `rgba(var(--${category.color}), 0.2)`
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: `rgba(var(--${category.color}), 0.2)`,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
