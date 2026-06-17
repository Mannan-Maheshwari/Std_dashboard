"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Progress", icon: BarChart2 },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.nav
      animate={{ width: collapsed ? 70 : 210 }}
      transition={{ duration: 0.35 }}
      className="hidden md:flex flex-col shrink-0 bg-zinc-900/80 backdrop-blur
                 border-r border-zinc-800 p-3 min-h-screen relative"
    >
      <div className="flex items-center gap-2 px-2 mb-6 h-10">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
          <GraduationCap size={22} className="text-white bold" />
        </div>

        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-white font-semibold text-sm whitespace-nowrap"
            >
              LearnSpace
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={collapsed ? item.label : ""}
              className={`flex items-center gap-3 px-2.5 py-2 rounded-lg
                         text-sm w-full transition-colors
                         ${isActive ? "bg-violet-600/20 text-violet-300" : "text-zinc-400 hover:bg-zinc-800"}`}
            >
              <Icon size={18} className="shrink-0" />

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center w-7 h-7 rounded-lg
                   bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white
                   transition-colors mx-auto mt-4"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </motion.nav>
  );
}