// components/MobileNav.jsx
"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses",   icon: BookOpen },
  { label: "Progress",  icon: BarChart2 },
  { label: "Settings",  icon: Settings },
];

export default function MobileNav() {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50
                    bg-zinc-900/90 backdrop-blur border-t border-zinc-800
                    flex items-center justify-around px-2 py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.label;

        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className="relative flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl"
          >
            {isActive && (
              <motion.div
                layoutId="mobile-pill"
                className="absolute inset-0 bg-violet-600/20 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            <Icon size={20} className={isActive ? "text-violet-400" : "text-zinc-500"} />
            <span className={`text-[10px] font-medium ${isActive ? "text-violet-300" : "text-zinc-500"}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}