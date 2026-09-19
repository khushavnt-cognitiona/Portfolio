import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Briefcase, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: "10+",
      label: "Projects Completed",
      icon: Code,
      bg: "bg-sky-100 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400",
      cardBorder: "hover:border-sky-300 dark:hover:border-sky-800"
    },
    {
      id: 2,
      value: "15+",
      label: "Technologies",
      icon: Users,
      bg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
      cardBorder: "hover:border-emerald-300 dark:hover:border-emerald-800"
    },
    {
      id: 3,
      value: "1+",
      label: "Years of Experience",
      icon: Briefcase,
      bg: "bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400",
      cardBorder: "hover:border-orange-300 dark:hover:border-orange-800"
    },
    {
      id: 4,
      value: "100%",
      label: "Learning Attitude",
      icon: Heart,
      bg: "bg-pink-100 text-pink-600 dark:bg-pink-950/60 dark:text-pink-400",
      cardBorder: "hover:border-pink-300 dark:hover:border-pink-800"
    },
  ];

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 ${stat.cardBorder}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
