import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kawerifytech@gmail.com",
      href: "mailto:kawerifytech@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+263 71 626 4988",
      href: "tel:+263716264988",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ko Mthombeni Plot 2 along grampsway road, Rangemore, Bulawayo, Zimbabwe",
      href: "https://maps.google.com/?q=Ko+Mthombeni+Plot+2+Rangemore+Bulawayo+Zimbabwe",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to collaborate, innovate, or discuss your next project? 
            I'm available for business opportunities worldwide.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 card-glow bg-card border-border hover:border-glow/50 group animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-glow/10 rounded-lg group-hover:bg-glow/20 transition-colors">
                    <Icon className="w-6 h-6 text-glow" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium group-hover:text-glow transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-glow/30 text-center space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Ready to Start?</h3>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              Whether you have a project in mind or just want to chat about technology, 
              I'm here to help bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="group" asChild>
              <a href="mailto:kawerifytech@gmail.com">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send an Email
              </a>
            </Button>
            <Button variant="premium" size="lg" asChild>
              <a href="tel:+263716264988">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </Card>

      
      </div>
    </section>
  );
};

export default Contact;
