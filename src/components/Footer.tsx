import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-glow/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-glow-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="rainbow-text">Siyabonga</span> Sibanda
            </h3>
            <p className="text-muted-foreground text-sm">
              Building the future with technology. Entrepreneur, Developer, and Innovator.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border hover:border-glow/50 hover:text-glow transition-all glow-on-hover"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                      opacity: 0
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline hover:underline-offset-4 hover:decoration-glow"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-glow/10">
                  <Mail className="w-4 h-4 text-glow" />
                </div>
                <a 
                  href="mailto:kawerifytech@gmail.com" 
                  className="text-sm hover:underline hover:text-glow transition-colors"
                >
                  kawerifytech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-glow/10">
                  <Phone className="w-4 h-4 text-glow" />
                </div>
                <span className="text-sm hover:text-glow transition-colors">+263 71 626 4988</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-glow/10 mt-1">
                  <MapPin className="w-4 h-4 text-glow" />
                </div>
                <span className="text-sm hover:text-glow transition-colors">
                  Ko Mthombeni Plot 2 along grampsway road, Rangemore, Bulawayo, Zimbabwe Ready to Start?
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg hover:border-glow/50 hover:text-glow transition-all duration-300 group glow-button"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
