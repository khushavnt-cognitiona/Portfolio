import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Coffee,
  Leaf,
  Atom,
  Database,
  Code,
  Palette,
  Wind,
  Layers,
  GitBranch,
  Box,
  Cloud,
  Laptop,
  Send,
  Shield,
  FileCode,
  Cpu,
  Package,
  MoreHorizontal
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { MOCK_SKILLS } from '../data/mockData';

const iconMap = {
  Coffee,
  Leaf,
  Atom,
  Database,
  Code,
  Palette,
  Wind,
  Layers,
  GitBranch,
  Box,
  Cloud,
  Laptop,
  Send,
  Shield,
  FileCode,
  Github: FaGithub,
  Cpu,
  Package
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & Cloud'];

  const filteredSkills = selectedCategory === 'All'
    ? MOCK_SKILLS
    : MOCK_SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              <span>My Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technologies I <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500">Work With</span>
            </h2>
          </div>

          {/* Handwritten Annotation */}
          <div className="mt-4 sm:mt-0 font-handwriting text-slate-500 dark:text-slate-400 text-xl font-semibold transform rotate-[-2deg]">
            Good Developers Use Great Tools 🛠️
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl max-w-2xl">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}

          {/* "More..." Card matching reference image */}
          {selectedCategory === 'All' && (
            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-3">
                <MoreHorizontal className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                More
              </span>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;
