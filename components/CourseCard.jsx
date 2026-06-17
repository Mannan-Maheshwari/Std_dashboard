"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const colorMap = {
  "from-violet-500 to-purple-600": {
    gradient: "from-violet-500 to-purple-600",
    glow: "bg-violet-500",
    text: "text-violet-400",
  },
  "from-blue-500 to-cyan-600": {
    gradient: "from-blue-500 to-cyan-600",
    glow: "bg-blue-500",
    text: "text-blue-400",
  },
  "from-emerald-500 to-teal-600": {
    gradient: "from-emerald-500 to-teal-600",
    glow: "bg-emerald-500",
    text: "text-emerald-400",
  },
  "from-orange-500 to-amber-600": {
    gradient: "from-orange-500 to-amber-600",
    glow: "bg-orange-500",
    text: "text-orange-400",
  },
};

export default function CourseCard({ course, index }) {
  const Icon = Icons[course.icon_name] || Icons.BookOpen;

  const colors =
    colorMap[course.color] ||
    colorMap["from-violet-500 to-purple-600"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-5
                 overflow-hidden cursor-pointer transition-all duration-300
                 hover:border-zinc-600/80"
    >
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`absolute -top-10 -right-10 w-28 h-28 rounded-full
        ${colors.glow} opacity-0 group-hover:opacity-10
        blur-2xl transition-all duration-500`}
      />

      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient}
          flex items-center justify-center shadow-md`}
        >
          <Icon size={18} className="text-white" />
        </div>

        <span className={`text-xs font-semibold ${colors.text}`}>
          {course.progress}%
        </span>
      </div>

      <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide">
        {course.category}
      </span>

      <h3 className="mt-1 mb-4 text-white font-semibold text-sm leading-snug">
        {course.title}
      </h3>

      <div>
        <div className="flex justify-between mb-1">
          <span className="text-[10px] text-zinc-500">Progress</span>
          <span className="text-[10px] text-zinc-400">
            {course.progress} / 100
          </span>
        </div>

        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              delay: index * 0.08 + 0.3,
              duration: 0.9,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}