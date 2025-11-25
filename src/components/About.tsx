// src/components/About.tsx
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCounter } from "@/hooks/use-counter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const yearsCount = useCounter(2);
  const studentsCount = useCounter(5);
  
  const highlights = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Building robust and scalable applications using modern technologies"
    },
    {
      icon: Lightbulb,
      title: "Tech Administration",
      description: "Managing technical operations and infrastructure at Kawerify Tech"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working with cross-functional teams to deliver exceptional results"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Implementing cutting-edge solutions to solve real-world problems"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="rainbow-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Technology professional based in Bulawayo, Zimbabwe, with 2+ years of experience in
            software development and technical administration at Kawerify Tech.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-glow to-glow-secondary rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-glow/50 bg-card">
                <img
                  src="/profile.jpg"
                  alt="Siyabonga Sibanda - Technology Professional"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <motion.div 
            className="w-full md:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Hello! I'm <span className="text-glow">Siyabonga Sibanda</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              As a dedicated technology professional at Kawerify Tech, I combine my passion for innovation with practical expertise to deliver impactful digital solutions. With a focus on software development and technical administration, I help drive technological excellence and operational efficiency in every project I undertake.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across software development, team leadership, and business strategy. 
              I believe in the power of technology to transform lives and businesses, and I'm committed 
              to pushing the boundaries of what's possible.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-glow/50 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-glow mb-2">{yearsCount}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-glow animate-pulse" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-glow/50 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-glow mb-2">{studentsCount}+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-glow animate-pulse" />
              </div>
            </div>
            
            <Button variant="glow" className="mt-4 glow-button" size="lg">
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Highlights Section */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 card-glow bg-card border-border hover:border-glow/50 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-glow/10 rounded-lg">
                      <Icon className="w-6 h-6 text-glow" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Journey Section */}
        <div className="relative px-4">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-glow via-glow-secondary to-glow" />
          
          <div className="space-y-12">
            {/* Journey Item 1 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow/30 md:ml-auto md:w-[calc(50%-2rem)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-glow animate-pulse" />
                    <span className="text-sm font-semibold text-glow">The Beginning</span>
                  </div>
                  <h3 className="text-xl font-bold">Started the Journey</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Two years ago, I embarked on an incredible journey into the world of technology. 
                    What started as curiosity quickly transformed into a passion for creating innovative solutions.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Journey Item 2 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow-secondary/30 md:mr-auto md:w-[calc(50%-2rem)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-glow-secondary animate-pulse" />
                    <span className="text-sm font-semibold text-glow-secondary">Building Impact</span>
                  </div>
                  <h3 className="text-xl font-bold">Kawerify Tech Admin</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As Admin at Kawerify Tech, I've had the privilege of working with diverse 
                    organizations, companies, and individuals worldwide, pushing boundaries and creating 
                    meaningful technological solutions.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Journey Item 3 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow/30 md:ml-auto md:w-[calc(50%-2rem)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-glow animate-pulse" />
                    <span className="text-sm font-semibold text-glow">Empowering Others</span>
                  </div>
                  <h3 className="text-xl font-bold">Mentorship & Growth</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mentored over 5 aspiring developers, sharing knowledge and inspiring the next generation 
                    of tech innovators. Believing in the transformative power of technology to solve real-world problems.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Journey Item 4 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow-secondary/30 md:mr-auto md:w-[calc(50%-2rem)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-glow-secondary animate-pulse" />
                    <span className="text-sm font-semibold text-glow-secondary">The Future</span>
                  </div>
                  <h3 className="text-xl font-bold">Building Tomorrow</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ready to connect and collaborate on innovative projects. Whether you're looking to build 
                    the next big thing or need technical expertise, <span className="text-glow font-semibold">let's build the future together.</span>
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;