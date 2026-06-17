"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroTile() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05, duration: 0.45 }}
      className="relative h-full min-h-[220px] bg-zinc-900 border border-zinc-800
                 rounded-2xl p-6 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-blue-600/5 pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div
            suppressHydrationWarning
            className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
          />
          <p suppressHydrationWarning className="text-zinc-400 text-sm">
            {greeting || "Good morning"} 👋
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          Welcome back, <span className="text-violet-400">Buddy</span>
        </h1>

        <p className="text-zinc-500 text-sm mt-1">
          You have <span className="text-white font-medium">3 lessons</span> due today.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {[
          {
            icon: Flame,
            label: "Day streak",
            value: "14",
            accent: "text-orange-500",
            bg: "bg-orange-500/10 border-orange-500/20",
          },
          {
            icon: Trophy,
            label: "Completed",
            value: "7",
            accent: "text-yellow-500",
            bg: "bg-yellow-500/10 border-yellow-500/20",
          },
          {
            icon: Clock,
            label: "Hours this week",
            value: "12h",
            accent: "text-violet-500",
            bg: "bg-violet-500/10 border-violet-500/20",
          },
        ].map(({ icon: Icon, label, value, accent, bg }) => (
          <div
            key={label}
            className={`flex items-center gap-2 ${bg} border rounded-lg px-3 py-2`}
          >
            <Icon size={15} className={accent} />
            <div>
              <p className="text-[10px] text-zinc-500 leading-none mb-0.5">
                {label}
              </p>
              <p className="text-sm font-semibold text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}