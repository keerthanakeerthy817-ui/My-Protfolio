import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Brain, 
  Cpu, 
  ChevronRight, 
  Menu, 
  X,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Instagram,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-deep-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-electric-purple flex items-center justify-center">
            <span className="text-black font-black text-xs">KN</span>
          </div>
          <span className="hidden sm:block">KEERTHANA N</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-neon-cyan transition-colors"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-black border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-neon-cyan"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/50 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      viewport={{ once: true }}
      className="h-1 bg-neon-cyan mt-6"
    />
  </div>
);

const SkillBadge = ({ name }: { name: string, key?: string }) => (
  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all cursor-default">
    {name}
  </span>
);

// --- Sections ---

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-electric-purple/10 blur-[120px] rounded-full animate-pulse" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
            {/* Circular Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 rounded-full blur-2xl animate-spin-slow" />
            
            {/* Photo Container */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden glass group">
              {/* TO USE YOUR PHOTO: 
                  1. Upload your photo to a site like postimages.org
                  2. Copy the "Direct Link" (ends in .jpg or .png)
                  3. Replace the URL below with your link
              */}
              <img 
                src="https://image2url.com/r2/default/images/1772376082872-4cc5c64b-32ec-4992-8d68-945653a4cadd.jpeg" 
                alt="Keerthana N" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 glass rounded-2xl border-neon-cyan/30"
            >
              <Brain className="w-6 h-6 text-neon-cyan" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl border-electric-purple/30"
            >
              <Code2 className="w-6 h-6 text-electric-purple" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">AI & Full-Stack Developer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-4 leading-tight whitespace-nowrap"
          >
            Hi, It's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-purple">Keerthana N</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl font-bold text-white/80 mb-6"
          >
            I'm a <span className="text-neon-cyan">Developer</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg text-white/50 mb-10 max-w-xl leading-relaxed"
          >
            AI & Machine Learning enthusiast and Full-Stack Developer passionate about building intelligent systems that enhance user experience and solve real-time problems efficiently.
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start gap-6 mb-10"
          >
            <a href="https://github.com/keerthanan1212-since" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-neon-cyan hover:scale-110 transition-all border-white/5">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/keerthana-n-a38994379" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-neon-cyan hover:scale-110 transition-all border-white/5">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-neon-cyan hover:scale-110 transition-all border-white/5">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:keerthanakeerthy817@gmail.com" className="p-3 rounded-full glass hover:text-neon-cyan hover:scale-110 transition-all border-white/5">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neon-cyan transition-all flex items-center gap-2 group"
            >
              View Portfolio
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
    >
      <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-1">
        <div className="w-1 h-2 bg-current rounded-full" />
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading subtitle="My Journey & Vision">About Me</SectionHeading>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              I am currently pursuing a Bachelor of Engineering at Maharaja Institute of Technology, Mysore, with an expected graduation in 2028. My focus lies at the intersection of AI-driven development and scalable web architecture.
            </p>
            <p>
              My goal is to build intelligent systems that solve real-world problems using AI and full-stack technologies. I believe in the power of code to create meaningful impact and enhance human experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-neon-cyan font-bold mb-2">Strengths</h4>
                <ul className="text-sm space-y-2">
                  <li>• Problem Solving</li>
                  <li>• Web Technologies</li>
                  <li>• Machine Learning</li>
                  <li>• Continuous Learner</li>
                </ul>
              </div>
              <div>
                <h4 className="text-electric-purple font-bold mb-2">Location</h4>
                <p className="text-sm">Mysore, Karnataka, India</p>
                <h4 className="text-electric-purple font-bold mt-4 mb-2">Education</h4>
                <p className="text-sm">B.E., Maharaja Institute of Technology</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
            {/* TO USE YOUR PHOTO: 
                1. Upload your photo to a site like postimages.org
                2. Copy the "Direct Link" (ends in .jpg or .png)
                3. Replace the URL below with your link
            */}
            <img 
              src="https://image2url.com/r2/default/images/1772376082872-4cc5c64b-32ec-4992-8d68-945653a4cadd.jpeg" 
              alt="Keerthana N" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
            
            {/* Floating Tech Stack */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Pandas', 'NumPy', 'Git'].map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-cyan/30 rounded-tr-3xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-electric-purple/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Full-Stack App",
      category: "Full-Stack",
      description: "Applications built using modern frontend and backend technologies to solve practical problems.",
      tags: ["React", "Node.js", "Express", "SQLite"],
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "AI & Machine Learning",
      category: "AI/ML",
      description: "Projects involving data analysis, machine learning models, and intelligent automation systems.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "GitHub Contributions",
      category: "Open Source",
      description: "Active technical work showcasing consistency, coding practice, and technical growth.",
      tags: ["Git", "Collaboration", "Documentation"],
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/keerthanan1212-since"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Showcasing technical projects and contributions">Portfolio</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass hover:border-neon-cyan/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="text-xs font-bold text-neon-cyan uppercase tracking-widest mb-2">{project.category}</div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neon-cyan transition-colors"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button className="inline-flex items-center gap-2 text-sm font-bold text-white/30 cursor-not-allowed">
                  Coming Soon <Sparkles className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-neon-cyan/10 to-electric-purple/10 border border-white/5 text-center"
        >
          <p className="text-white/70 mb-4">Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/keerthanan1212-since" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-neon-cyan transition-all"
          >
            <Github className="w-5 h-5" />
            Explore GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Responsive website development with seamless frontend & backend integration and REST API implementation.",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-neon-cyan"
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Data preprocessing, predictive modeling, and building intelligent automation systems for complex tasks.",
      icon: <Brain className="w-8 h-8" />,
      color: "text-electric-purple"
    },
    {
      title: "Problem Solving & Optimization",
      description: "Algorithm design, optimization techniques, and real-time system development for maximum efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      color: "text-white"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Highlighting professional capabilities and expertise">Services</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl glass group hover:bg-white/[0.08] transition-all"
            >
              <div className={cn("mb-8 transition-transform group-hover:-translate-y-2", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_95uclbm',
        'template_0sjb4h2',
        formRef.current,
        'ilIa0lzSI_GeKteU2'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-cyan opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Let's build something intelligent together">Contact Me</SectionHeading>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:keerthanakeerthy817@gmail.com" className="text-lg hover:text-neon-cyan transition-colors">
                    keerthanakeerthy817@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/keerthana-n-a38994379" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-neon-cyan transition-colors"
                  >
                    keerthana-n-a38994379
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Location</div>
                  <p className="text-lg">Mysore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://github.com/keerthanan1212-since" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/keerthana-n-a38994379" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl glass"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Name</label>
                  <input 
                    name="user_name"
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</label>
                  <input 
                    name="user_email"
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                  submitStatus === 'success' 
                    ? "bg-emerald-500 text-white" 
                    : submitStatus === 'error'
                    ? "bg-rose-500 text-white"
                    : "bg-gradient-to-r from-neon-cyan to-electric-purple text-black hover:opacity-90"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  "Failed to Send"
                ) : (
                  "Send Message"
                )}
              </button>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-emerald-400 text-sm font-medium"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-rose-400 text-sm font-medium"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-neon-cyan to-electric-purple" />
        <span className="font-bold tracking-tighter">KEERTHANA N</span>
      </div>
      
      <div className="text-white/30 text-xs font-medium">
        © {new Date().getFullYear()} Keerthana N. All rights reserved.
      </div>
      
      <div className="flex gap-6">
        <a href="#home" className="text-xs text-white/50 hover:text-white transition-colors">Home</a>
        <a href="#about" className="text-xs text-white/50 hover:text-white transition-colors">About</a>
        <a href="#portfolio" className="text-xs text-white/50 hover:text-white transition-colors">Portfolio</a>
        <a href="#contact" className="text-xs text-white/50 hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-neon-cyan/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-electric-purple/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
