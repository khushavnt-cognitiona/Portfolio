import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, MessageSquareQuote, Star, Send, Mail, ArrowRight, Shield, Layers } from 'lucide-react';
import { FaLinkedin, FaGithub, FaJava, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiGit, SiPostman, SiTailwindcss, SiJsonwebtokens } from 'react-icons/si';
import { MOCK_EXPERIENCES, MOCK_TESTIMONIALS } from '../data/mockData';

const techIconMap = {
  "Java": FaJava,
  "Spring Boot": SiSpringboot,
  "React": FaReact,
  "MySQL": SiMysql,
  "REST API": SiPostman,
  "Git": SiGit
};

const skillsStack = [
  { name: 'Java', icon: FaJava, color: '#E76F51' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Spring Security', icon: Shield, color: '#6DB33F' },
  { name: 'MySQL', icon: SiMysql, color: '#00758F' },
  { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#6366F1' },
  { name: 'Hibernate / JPA', icon: Layers, color: '#59666C' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const Experience = () => {
  const [activeTestimonial] = useState(0);

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid: Work Experience Timeline & Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                My Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500">Journey</span>
              </h2>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[19px] sm:before:left-[27px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-cyan-500">
              {MOCK_EXPERIENCES.map((exp, idx) => {
                const isFirst = idx === 0;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Timeline Node Badge with Number */}
                    <div className={`absolute -left-[37px] sm:-left-[45px] top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-900 border-2 ${
                      isFirst ? 'border-orange-500 text-orange-600 dark:text-orange-400 shadow-orange-500/20' : 'border-cyan-500 text-cyan-600 dark:text-cyan-400 shadow-cyan-500/20'
                    } flex items-center justify-center font-extrabold text-xs shadow-md group-hover:scale-110 transition-transform`}>
                      0{idx + 1}
                    </div>

                    {/* Glassmorphic Experience Card */}
                    <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      
                      {/* Top Role & Company Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                            <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 self-start sm:self-auto border shadow-2xs">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <div className="pt-4 space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isFirst ? 'text-orange-500' : 'text-cyan-500'}`} />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                        {exp.technologies.map((tech) => {
                          const IconComp = techIconMap[tech];
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {IconComp && <IconComp className="w-3.5 h-3.5" />}
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Testimonial Card */}
          <div id="testimonials" className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">
                <MessageSquareQuote className="w-4 h-4" />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                What People <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500">Say</span>
              </h2>
            </div>

            {/* Testimonial Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl relative flex flex-col justify-between"
            >
              {/* Top Quote Icon & Rating Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <MessageSquareQuote className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0 Rating</span>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-slate-700 dark:text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic mb-8">
                "{MOCK_TESTIMONIALS[activeTestimonial].quote}"
              </blockquote>

              {/* Author Details Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  {MOCK_TESTIMONIALS[activeTestimonial].initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {MOCK_TESTIMONIALS[activeTestimonial].author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {MOCK_TESTIMONIALS[activeTestimonial].role} • <span className="text-indigo-600 dark:text-indigo-400">{MOCK_TESTIMONIALS[activeTestimonial].company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Flagship "Let's Build Something Great Together" Developer CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Grid & Code Pattern Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

          {/* Low opacity code snippet decoration */}
          <div className="absolute right-6 top-6 text-[11px] font-mono text-indigo-400/15 pointer-events-none select-none leading-relaxed hidden xl:block">
{`const developer = {
  stack: ["Java", "Spring Boot", "React", "MySQL"],
  focus: "Building scalable applications",
  mindset: "Always Learning"
};`}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* LEFT COLUMN: Headings, Messaging, Skills Flow, Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-extrabold uppercase tracking-wider border border-indigo-400/30">
                <Send className="w-3.5 h-3.5 text-indigo-400" />
                <span>LET'S CONNECT</span>
              </div>

              {/* Main Heading & Subheadings */}
              <div>
                <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Great Together.</span>
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-200 mt-3">
                  Java Full Stack Developer focused on building secure, scalable and user-friendly applications.
                </p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-xl">
                  From Spring Boot APIs to React interfaces, I enjoy turning ideas into reliable, production-ready applications.
                </p>
              </div>

              {/* Skills Showcase Badges Flow */}
              <div className="pt-2">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Core Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:scale-105 transition-transform cursor-default"
                      style={{ borderColor: `${tech.color}40` }}
                    >
                      <tech.icon style={{ color: tech.color }} className="w-4 h-4" />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/khushvantjadhao"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>View My GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/khushvantjadhao"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white font-bold text-sm border border-blue-500/30 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Developer Value Cards & Skill Strength Visual */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 3 Developer Value Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-orange-500/30 hover:border-orange-500/60 transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-extrabold text-xs shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Backend Development</h4>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      Spring Boot • REST APIs • JPA/Hibernate • MySQL
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-extrabold text-xs shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Frontend Development</h4>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      React.js • JavaScript • Tailwind CSS • Responsive UI
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-500/60 transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-xs shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Full-Stack Development</h4>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      End-to-end applications • API integration • Authentication
                    </p>
                  </div>
                </div>
              </div>

              {/* Skill Strength Visual Indicator */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 flex items-center justify-between">
                  <span>FULL STACK DEVELOPMENT</span>
                  <span className="text-[10px] text-slate-400 font-normal">Core Areas</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1 font-semibold">
                      <span>Frontend</span>
                      <span className="text-cyan-400">React & Tailwind</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1 font-semibold">
                      <span>Backend</span>
                      <span className="text-orange-400">Java & Spring Boot</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1 font-semibold">
                      <span>Database</span>
                      <span className="text-sky-400">MySQL & JPA</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full w-[85%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1 font-semibold">
                      <span>APIs & Security</span>
                      <span className="text-purple-400">REST & Spring Security</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Info Footer Bar */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-semibold">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>khushvantjadhao@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="https://linkedin.com/in/khushvantjadhao" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/khushvantjadhao" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
