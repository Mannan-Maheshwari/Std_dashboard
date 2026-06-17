"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

// Tailwind purges dynamic classes like `bg-gradient-to-br ${course.color}`
// So we map each color string to its full classes statically
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
  const Icon = LucideIcons[course.icon_name] || LucideIcons.BookOpen;
  const colors = colorMap[course.color] || colorMap["from-violet-500 to-purple-600"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09, duration: 0.45, ease: "easeOut" }}
      whileHover={{
        scale: 1.025,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-5
                 overflow-hidden cursor-pointer hover:border-zinc-600/80
                 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)] transition-all duration-300"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hover glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full
                       ${colors.glow} opacity-0 group-hover:opacity-15
                       blur-2xl transition-all duration-500`} />

      {/* Top row: icon + percentage */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient}
                         flex items-center justify-center shadow-lg`}>
          <Icon size={18} className="text-white" />
        </div>
        <span className={`text-xs font-bold ${colors.text}`}>
          {course.progress}%
        </span>
      </div>

      {/* Category + Title */}
      <span className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">
        {course.category}
      </span>
      <h3 className="mt-1 mb-5 text-white font-semibold text-sm leading-snug">
        {course.title}
      </h3>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] text-zinc-600">Progress</span>
          <span className="text-[10px] text-zinc-500">{course.progress} / 100</span>
        </div>
        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              delay: index * 0.09 + 0.4,
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}