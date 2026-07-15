import React from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandCpp, TbBrandFramerMotion } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

const technologies = [
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
  { name: "React", Icon: FaReact, color: "text-sky-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-600" },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", Icon: FaGithub, color: "text-neutral-800 dark:text-white" },
  { name: "Java", Icon: FaJava, color: "text-orange-500" },
  { name: "C/C++", Icon: TbBrandCpp, color: "text-blue-500" },
  { name: "Framer Motion", Icon: TbBrandFramerMotion, color: "text-blue-500" },
  { name: "Figma", Icon: FiFigma, color: "text-purple-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Stack = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-16 text-center max-w-2xl mx-auto"
      id="tech"
    >
      <motion.h2
        variants={itemVariants}
        className="text-xl uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 font-semibold mb-8"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3">
        {technologies.map(({ name, Icon, color }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30 text-neutral-800 dark:text-neutral-200 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-default select-none"
          >
            <Icon className={`text-lg ${color}`} />
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Stack;