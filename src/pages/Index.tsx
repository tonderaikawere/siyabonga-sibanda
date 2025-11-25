import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AnimatedSection id="home">
        <Hero />
      </AnimatedSection>
      <AnimatedSection id="about" delay={0.2}>
        <About />
      </AnimatedSection>
      <AnimatedSection id="skills" delay={0.3}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection id="projects" delay={0.4}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="services" delay={0.5}>
        <Services />
      </AnimatedSection>
      <AnimatedSection id="contact" delay={0.6}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
