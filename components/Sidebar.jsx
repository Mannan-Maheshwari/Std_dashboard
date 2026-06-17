// components/Sidebar.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses",   icon: BookOpen },
  { label: "Progress",  icon: BarChart2 },
  { label: "Settings",  icon: Settings },
];

export default function Sidebar() {
  const [active, setActive]       = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.nav
      animate={{ width: collapsed ? 68 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="hidden md:flex flex-col shrink-0 bg-zinc-900/80 backdrop-blur
                 border-r border-zinc-800 p-3 min-h-screen relative overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-6 h-10">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 shrink-0" />
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="text-white font-bold text-base tracking-tight whitespace-nowrap"
            >
              LearnSpace
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              title={collapsed ? item.label : undefined}
              className="relative flex items-center gap-3 px-2.5 py-2.5 rounded-xl
                         text-sm font-medium text-left transition-colors w-full"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-violet-600/20 border border-violet-500/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <Icon size={18} className={`shrink-0 ${isActive ? "text-violet-400" : "text-zinc-500"}`} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    className={`whitespace-nowrap ${isActive ? "text-violet-300" : "text-zinc-400"}`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Collapse toggle */}
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