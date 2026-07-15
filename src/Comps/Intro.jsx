import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 md:py-28">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative group mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-neutral-900/5 dark:bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <img
          src="/profile.jpg"
          alt="Amrita"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-neutral-200 dark:border-neutral-800 object-cover shadow-sm group-hover:scale-[1.03] transition-transform duration-300"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-4xl font-bold tracking-tight"
      >
        Hello, I'm Amrita!
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-lg text-neutral-500 dark:text-neutral-400"
      >
        Frontend Web Developer
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        Building responsive web applications with React and modern JavaScript.
      </motion.p>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-5 flex items-center gap-2 text-neutral-500 dark:text-neutral-400"
      >
        <MapPin size={16} className="text-red-500" />
        <span>Ranchi, Jharkhand</span>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="https://github.com/amritasrc"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://x.com/amritasrc"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <BsTwitterX size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/amrita-kumari-dev/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://discord.com/users/1354067160862949471"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <FaDiscord size={22} />
        </a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/resume"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors shadow-sm"
        >
          <FileText size={16} />
          Resume
        </a>

        <a
          href="mailto:amrita.sen.dev@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-all shadow-sm"
        >
          <Mail size={16} />
          Mail Me
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;