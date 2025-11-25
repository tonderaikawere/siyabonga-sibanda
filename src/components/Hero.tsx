import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <Code2 className="w-4 h-4 text-glow" />
            <span className="text-sm text-muted-foreground">Tech Administrator • Developer • Innovator</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Hi, I'm <span className="rainbow-text">Siyabonga</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Technology Administrator at Kawerify Tech
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Admin & Developer at <span className="text-glow font-semibold">Kawerify Tech</span> in Zimbabwe. 
            Crafting digital solutions and managing tech operations with a passion for innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="glow" size="lg" className="group glow-button" asChild>
              <a href="#contact">
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="premium" size="lg" className="glow-button" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
