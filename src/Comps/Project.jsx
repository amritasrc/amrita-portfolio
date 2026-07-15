import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    projectName: "Rhythmify",
    imageSrc: "/rhythmify.png",
    githubLink: "https://github.com/amritasrc/Rhythmify",
    link: "https://rhythmify-jade.vercel.app/",
    projectDescrip:
      "A modern music player built with React, JavaScript, Tailwind CSS, and the YouTube Data API. Search songs, play music instantly, control playback with keyboard shortcuts, and enjoy a clean Spotify-inspired experience.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "YouTube API",
    ],
  },
  {
    projectName: "Expense Tracker",
    imageSrc: "/expense-tracker.png",
    githubLink: "https://github.com/amritasrc/Expense-Tracker",
    link: "https://expense-tracker-orcin-tau-32.vercel.app/",
    projectDescrip:
      "Track daily expenses with categorized transactions, real-time calculations, and a clean, user-friendly interface.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Local Storage",
    ],
  },
  {
    projectName: "YouTube StudyMode",
    imageSrc: "/yt-studymode.png",
    githubLink: "https://github.com/amritasrc/YT-StudyMode-Extension",
    link: "https://github.com/amritasrc/YT-StudyMode-Extension",
    projectDescrip:
      "A browser extension that removes YouTube recommendations and comments, helping users stay focused while studying.",
    technologies: [
      "JavaScript",
      "Chrome Extension API",
      "HTML",
      "CSS",
    ],
  },
  {
    projectName: "AniVerse",
    imageSrc: "/aniverse.png",
    githubLink: "https://github.com/amritasrc/AniVerse",
    link: "https://ani-verse-lake.vercel.app/",
    projectDescrip:
      "Discover anime through a modern interface with search, ratings, genres, and detailed information powered by an anime API.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    projectName: "Gradient Generator",
    imageSrc: "/background-gradient.png",
    githubLink:
      "https://github.com/amritasrc/Background-gradient-generator",
    link: "https://background-gradient-generator-inky.vercel.app/",
    projectDescrip:
      "Generate beautiful CSS gradients with live previews and one-click CSS code copying for faster UI development.",
    technologies: ["HTML", "JavaScript", "CSS"],
  },
];

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16"
      id="projects"
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-xl uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 font-semibold text-center mb-10">
          Projects
        </h2>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.projectName}
            {...project}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Project;