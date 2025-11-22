import { Code2, Lightbulb, Users, Rocket, Award, BookOpen, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useCounter } from "@/hooks/use-counter";
import { Button } from "@/components/ui/button";

const About = () => {
  const yearsCount = useCounter(2);
  const studentsCount = useCounter(5);
  
  const highlights = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Crafting innovative solutions with cutting-edge technologies"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description: "Leading Kawerify Tech Entertainment to new heights"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Empowering the next generation of developers"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Believing technology is the future and making it happen"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="rainbow-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            My journey in technology started 2 years ago, and it's been an incredible ride of growth, 
            innovation, and impact.
          </p>
        </div>

        {/* Profile and Content Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-glow to-glow-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-glow/50 bg-card">
                <img 
                  src="/profile.jpg" 
                  alt="Siyabonga Sibanda" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Hello! I'm <span className="text-glow">Siyabonga Sibanda</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate technologist and entrepreneur with a deep love for creating innovative solutions 
              that make a difference. As the founder of Kawerify Tech, I'm on a mission to revolutionize the 
              tech landscape through cutting-edge development and strategic thinking.
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
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 card-glow bg-card border-border hover:border-glow/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
            );
          })}
        </div>

        {/* Journey Timeline */}
        <div className="relative px-4">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-glow via-glow-secondary to-glow" />
          
          <div className="space-y-12">
            {/* Journey Card 1 */}
            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow/30 animate-fade-in md:ml-auto md:w-[calc(50%-2rem)]">
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
            </div>

            {/* Journey Card 2 */}
            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow-secondary/30 animate-fade-in md:mr-auto md:w-[calc(50%-2rem)]" style={{ animationDelay: "0.2s" }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-glow-secondary animate-pulse" />
                    <span className="text-sm font-semibold text-glow-secondary">Building Impact</span>
                  </div>
                  <h3 className="text-xl font-bold">Kawerify Tech Admin</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As Admin at Kawerify Tech Entertainment, I've had the privilege of working with diverse 
                    organizations, companies, and individuals worldwide, pushing boundaries and creating 
                    meaningful technological solutions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Journey Card 3 */}
            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow/30 animate-fade-in md:ml-auto md:w-[calc(50%-2rem)]" style={{ animationDelay: "0.4s" }}>
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
            </div>

            {/* Journey Card 4 */}
            <div className="relative">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-glow-secondary/30 animate-fade-in md:mr-auto md:w-[calc(50%-2rem)]" style={{ animationDelay: "0.6s" }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
