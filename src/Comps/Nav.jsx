import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 mx-auto flex w-fit items-center gap-3 rounded-full border border-zinc-200/60 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg shadow-lg shadow-zinc-200/20 dark:shadow-black/20 px-3 py-2"
    >
      <Link to="/">
        <img
          src="/profile.jpg"
          alt="Amrita"
          className="h-9 w-9 rounded-full object-cover border border-zinc-200 dark:border-zinc-700 hover:scale-105 transition-transform"
        />
      </Link>

      {/* Projects */}
      <Link
        to="/projects"
        className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition"
      >
        Projects
      </Link>

      {/* Resume */}
      <Link
        to="/resume"
        className="
          rounded-full px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition flex items-center gap-1
        "
      >
        <FileText size={15} />
        Resume
      </Link>

      <ThemeToggle />
    </motion.nav>
  );
};

export default Nav;
