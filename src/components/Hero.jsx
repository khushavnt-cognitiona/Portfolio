import React from 'react';
import { motion } from 'framer-motion';
import { Send, Eye, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  // Character-by-character color mapping for "Software Engineer"
  const softwareEngineerChars = [
    { char: 'S', color: '#F97316' }, // Orange
    { char: 'o', color: '#3B82F6' }, // Blue
    { char: 'f', color: '#8B5CF6' }, // Purple
    { char: 't', color: '#10B981' }, // Green
    { char: 'w', color: '#06B6D4' }, // Cyan
    { char: 'a', color: '#EC4899' }, // Pink
    { char: 'r', color: '#EAB308' }, // Yellow
    { char: 'e', color: '#EF4444' }, // Red
    { char: ' ', color: 'transparent' }, // Space
    { char: 'E', color: '#2563EB' }, // Blue
    { char: 'n', color: '#F97316' }, // Orange
    { char: 'g', color: '#9333EA' }, // Purple
    { char: 'i', color: '#16A34A' }, // Green
    { char: 'n', color: '#0891B2' }, // Cyan
    { char: 'e', color: '#D946EF' }, // Pink
    { char: 'e', color: '#CA8A04' }, // Yellow
    { char: 'r', color: '#DC2626' }, // Red
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Professional Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Opportunities</span>
            </div>

            {/* Main Headings */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Khushvant <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500">Jadhao</span>
              </h1>
              
              {/* Colorful Character-by-Character "Software Engineer" Heading */}
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 flex flex-wrap items-center">
                {softwareEngineerChars.map((item, index) => (
                  item.char === ' ' ? (
                    <span key={index} className="w-2 sm:w-3 inline-block">&nbsp;</span>
                  ) : (
                    <span
                      key={index}
                      style={{ color: item.color }}
                      className="inline-block transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-default select-none"
                    >
                      {item.char}
                    </span>
                  )
                ))}
              </h3>
            </div>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              I build scalable web applications using Java, Spring Boot, React.js and MySQL. 
              Passionate about learning new technologies, solving real-world problems and creating impactful digital solutions.
            </p>

            {/* Buttons & Socials Container */}
            <div className="pt-2 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Let's Connect</span>
                </a>

                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>View My Work</span>
                </a>
              </div>

              {/* Social Media Links & Handwritten callout */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/khushvantjadhao"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#0A66C2] flex items-center justify-center border border-blue-200 dark:border-blue-800/40 hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/khushavnt-cognitiona"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/engineer_khushvant/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-950/50 text-[#E4405F] flex items-center justify-center border border-pink-200 dark:border-pink-800/40 hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:khusujadhao329@gmail.com"
                    className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-800/40 hover:scale-110 transition-transform"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                {/* Handwritten Callout */}
                <div className="hidden sm:flex items-center gap-1 text-slate-500 font-handwriting text-xl font-medium tracking-wide">
                  <span>Build Learn Grow Repeat... ↗</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Profile Picture Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Clean Rounded Image Frame */}
            <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 bg-slate-900">
              <img
                src="/images/profile.jpg"
                alt="Khushvant Jadhao"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
