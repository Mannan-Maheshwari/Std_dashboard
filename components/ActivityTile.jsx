"use client";

import { motion } from "framer-motion";

const activityData = [
  4, 7, 2, 9, 5, 1, 8,
  3, 6, 4, 7, 2, 9, 5,
  8, 1, 6, 3, 7, 4, 9,
  2, 5, 8, 3, 6, 1, 7,
];

const days = ["M", "T", "W", "T", "F", "S", "S"];
const MAX  = Math.max(...activityData);

function getColor(value) {
  const ratio = value / MAX;
  if (ratio > 0.75) return "bg-violet-500";
  if (ratio > 0.5)  return "bg-violet-600/70";
  if (ratio > 0.25) return "bg-violet-800/50";
  return "bg-zinc-800";
}

export default function ActivityTile() {
  const weeks = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  const total = activityData.reduce((a, b) => a + b, 0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
      className="relative h-full min-h-[220px] bg-zinc-900 border border-zinc-800
                 rounded-2xl p-5 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-violet-600/8 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-white">Activity</h2>
          <p className="text-[10px] text-zinc-500 mt-0.5">{total} sessions this month</p>
        </div>
        <span className="text-[10px] text-zinc-600 bg-zinc-800 px-2 py-1 rounded-lg uppercase tracking-widest">
          4 weeks
        </span>
      </div>

      {/* Day labels */}
      <div className="flex gap-1.5 mb-1.5 px-0.5">
        {days.map((d, i) => (
          <span key={i} className="text-[9px] text-zinc-600 w-5 text-center">{d}</span>
        ))}
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex gap-1.5">
            {week.map((value, di) => (
              <motion.div
                key={di}
                title={`${value} sessions`}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + (wi * 7 + di) * 0.012,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{ scale: 1.3 }}
                className={`w-5 h-5 rounded-sm ${getColor(value)} cursor-pointer transition-shadow
                            hover:ring-1 hover:ring-violet-400 hover:ring-offset-1 hover:ring-offset-zinc-900`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-4">
        <span className="text-[10px] text-zinc-600">Less</span>
        {["bg-zinc-800", "bg-violet-800/50", "bg-violet-600/70", "bg-violet-500"].map((c, i) => (
          <div key={i} className={`w-3.5 h-3.5 rounded-sm ${c}`} />
        ))}
        <span className="text-[10px] text-zinc-600">More</span>
      </div>
    </motion.section>
  );
}