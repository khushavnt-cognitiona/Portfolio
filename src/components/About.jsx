import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, BookOpen, Briefcase, Award, Sparkles, Heart, Rocket, Code2, Loader2 } from 'lucide-react';
import { fetchEducation, fetchCertifications } from '../services/api';

const educationIconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
  Award: Award
};

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [educationList, setEducationList] = useState([]);
  const [certificationsList, setCertificationsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        setLoading(true);
        const [eduData, certData] = await Promise.all([
          fetchEducation(),
          fetchCertifications()
        ]);
        setEducationList(eduData || []);
        setCertificationsList(certData || []);
      } catch (err) {
        console.error('Failed to fetch education/certification data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadAboutData();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">
          <UserCheck className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-12">
          More Than Just a <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500">Developer</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Introduction & Ultra-Advanced IDE Developer Philosophy Card */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              I'm Khushvant Jadhao, a Full Stack Java Developer with 1+ year of experience in developing scalable web applications using Java, Spring Boot, React.js, and MySQL. I have completed my MCA (AI & ML) and a B.Voc in Software Development. I enjoy building end-to-end applications, exploring new technologies, and continuously improving my skills. I'm open to opportunities where I can contribute, learn, and grow as a software engineer.
            </p>

            {/* Ultra-Advanced IDE-Style Developer Philosophy Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden group relative"
            >
              {/* Top Window Header Bar */}
              <div className="px-5 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
              </div>

              {/* Main IDE Card Content Body */}
              <div className="p-6 sm:p-8 relative">
                {/* Low opacity decorative code pattern background */}
                <div className="absolute right-4 bottom-4 text-[10px] font-mono text-indigo-500/10 dark:text-indigo-400/10 pointer-events-none select-none leading-tight whitespace-pre hidden sm:block">
{`{
  "mindset": "continuous learning",
  "focus": "problem solving",
  "goal": "build better products"
}`}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                  
                  {/* LEFT SIDE: Section Label, Main Quote, Author */}
                  <div className="md:col-span-7 space-y-4">
                    {/* Section Tag */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60 text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>DEVELOPER PHILOSOPHY</span>
                    </div>

                    {/* Main Quote */}
                    <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-100 leading-snug tracking-tight">
                      “Code is not just what I do, it's how I{' '}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 group-hover:brightness-110 transition-all">
                        solve problems
                      </span>
                      .”
                    </blockquote>

                    {/* Author Signature */}
                    <div className="pt-1">
                      <span className="font-handwriting text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        — Khushvant Jadhao
                      </span>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Tech Visual Badges & Always Learning Status Card */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    
                    {/* Code Symbol Header Badge */}
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-mono font-bold text-base shadow-md shadow-indigo-500/25">
                      &lt;/&gt;
                    </div>

                    {/* Technology Badges Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200/80 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/50 hover:scale-105 transition-transform cursor-default">
                        Java
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/50 hover:scale-105 transition-transform cursor-default">
                        Spring Boot
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-50 text-cyan-600 border border-cyan-200/80 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/50 hover:scale-105 transition-transform cursor-default">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50 hover:scale-105 transition-transform cursor-default">
                        MySQL
                      </span>
                    </div>

                    {/* Status Message */}
                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/80 w-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Always Learning • Always Growing
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tabbed Cards (Education / Current Role / Interests) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              {/* Tabs Navbar */}
              <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === 'education'
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab('role')}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === 'role'
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('interests')}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === 'interests'
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Interests
                </button>
              </div>

              {/* Tab Content: Education */}
              {activeTab === 'education' && (
                <div className="space-y-4">
                  {loading && (
                    <div className="flex items-center justify-center py-6 text-indigo-600 dark:text-indigo-400 gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-xs font-medium text-slate-500">Loading education from backend...</span>
                    </div>
                  )}

                  {!loading && educationList.map((item, idx) => {
                    const IconComponent = educationIconMap[item.icon] || GraduationCap;
                    const cardBgStyles = [
                      "bg-purple-50/50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30",
                      "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30",
                      "bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
                      "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700"
                    ];
                    const cardStyle = cardBgStyles[idx % cardBgStyles.length];

                    return (
                      <div key={item.id || idx} className={`flex items-start gap-4 p-4 rounded-2xl border ${cardStyle}`}>
                        <div className="p-3 bg-purple-600 text-white rounded-xl shrink-0 mt-0.5 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            {item.institution} {item.status ? `(${item.status})` : ''} {item.year ? `(${item.year})` : ''}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Tab Content: Experience Highlights */}
              {activeTab === 'role' && (
                <div className="space-y-4 py-2">
                  <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/40">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-orange-600 text-white rounded-lg">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          Java Backend Developer
                        </h4>
                        <p className="text-xs text-orange-700 dark:text-orange-400 font-semibold">
                          Cognition Technology, Pune (Dec 2022 – Jul 2023)
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Developed backend REST APIs for Grocery Management E-commerce project using Spring Boot, JdbcTemplate, RowMapper, and MySQL.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-cyan-600 text-white rounded-lg">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          Full Stack Java Developer
                        </h4>
                        <p className="text-xs text-cyan-700 dark:text-cyan-400 font-semibold">
                          ARC Technology & Institute, Nagpur (During MCA)
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Built full-stack applications using Java, Spring Boot, React.js, and MySQL with complete CRUD & authentication.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab Content: Interests */}
              {activeTab === 'interests' && (
                <div className="space-y-3 py-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Cloud Architecture & Microservices</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span>UI/UX Design Systems & Animations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium">
                    <Rocket className="w-4 h-4 text-indigo-500" />
                    <span>AI & Machine Learning Applications</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
