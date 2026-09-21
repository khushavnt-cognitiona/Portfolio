import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, ChevronRight, Code, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { 
  FaJava, 
  FaReact, 
  FaGitAlt, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaServer 
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiSpringsecurity, 
  SiMysql, 
  SiHibernate, 
  SiJsonwebtokens, 
  SiTailwindcss 
} from 'react-icons/si';

const TECH_ITEMS = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Spring Security', icon: SiSpringsecurity, color: '#6db33f' },
  { name: 'Hibernate / JPA', icon: SiHibernate, color: '#b0b0b0' },
  { name: 'REST APIs', icon: FaServer, color: '#009688' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#d63aff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
];

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#07111F] text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800/80">
      
      {/* Top Gradient Divider Line (Blue -> Purple -> Cyan) */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"></div>

      {/* Ambient Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Faint Background Code Decoration Symbols */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] flex justify-between items-center px-10 font-mono text-4xl sm:text-6xl text-cyan-300 overflow-hidden">
        <span>&lt; /&gt;</span>
        <span>&#123; &#125;</span>
        <span className="hidden sm:inline">010101</span>
        <span>&lt;/&gt;</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* COLUMN 1: BRAND & SHORT BIO (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-indigo-500/20">
                KJ
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight uppercase leading-tight">
                  KHUSHVANT JADHAO
                </h3>
                <p className="text-xs font-medium text-cyan-400">
                  Java Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building secure, scalable and user-friendly web applications with Java, Spring Boot, React and MySQL.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Quick Links</span>
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: TECH STACK (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-purple-400" />
              <span>Tech Stack</span>
            </h4>

            <div className="flex flex-wrap gap-2">
              {TECH_ITEMS.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium hover:border-slate-700 transition-all cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 4: CONNECT WITH ME (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Connect With Me</span>
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://www.linkedin.com/in/khushvantjadhao"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-700/50 text-slate-300 hover:text-blue-300 transition-all duration-200 group"
              >
                <FaLinkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500 group-hover:text-blue-400" />
              </a>

              <a
                href="https://github.com/khushavnt-cognitiona"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-200 group"
              >
                <FaGithub className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500 group-hover:text-white" />
              </a>

              <a
                href="https://www.instagram.com/engineer_khushvant/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-pink-950/40 border border-slate-800 hover:border-pink-700/50 text-slate-300 hover:text-pink-300 transition-all duration-200 group"
              >
                <FaInstagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Instagram</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500 group-hover:text-pink-400" />
              </a>

              <a
                href="mailto:khusujadhao329@gmail.com"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-700/50 text-slate-300 hover:text-indigo-300 transition-all duration-200 group"
              >
                <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium truncate">khusujadhao329@gmail.com</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500 group-hover:text-indigo-400 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM DIVIDER & COPYRIGHT ROW */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            © {new Date().getFullYear()} Khushvant Jadhao. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div>
              Built with ❤️ using{' '}
              <span className="text-amber-400 font-semibold">Java</span>,{' '}
              <span className="text-emerald-400 font-semibold">Spring Boot</span> &{' '}
              <span className="text-cyan-400 font-semibold">React</span>
            </div>

            {/* Back to Top Circular Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 transition-all duration-300 shadow-lg group hover:scale-110 active:scale-95 cursor-pointer shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

