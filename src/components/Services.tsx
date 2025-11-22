import { Card } from "@/components/ui/card";
import { Code, Globe, Smartphone, Zap, Database, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business needs and drive growth.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences and drive conversions.",
      features: ["E-Commerce Platforms", "Corporate Websites", "Landing Pages", "Progressive Web Apps"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and expand your reach.",
      features: ["iOS & Android Apps", "React Native", "App Maintenance", "App Store Optimization"],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database architecture and management for efficient data handling and analytics.",
      features: ["Database Design", "Migration Services", "Performance Optimization", "Data Security"],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology and streamlined digital processes.",
      features: ["Process Automation", "Cloud Migration", "Legacy System Updates", "Digital Strategy"],
    },
    {
      icon: Users,
      title: "Tech Consulting & Mentorship",
      description: "Expert guidance for your technical challenges and career development in software engineering.",
      features: ["Technical Advisory", "Code Review", "Career Mentorship", "Best Practices"],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Services <span className="glow-text">Offered</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive technology solutions to accelerate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 card-glow bg-card border-border hover:border-glow/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-3 bg-glow/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-glow" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-glow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
