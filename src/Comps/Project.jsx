import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Nav from "./Nav";

const projects = [
  {
    projectName: "CopyIt",
    imageSrc: "/copyit.png",
    githubLink: "https://github.com/amritasrc/copyIt",
    link: "https://copy-it-gold.vercel.app/",
    projectDescrip:
      "A full-stack code snippet management platform built with React, Tailwind CSS, Node.js, Express, and MongoDB. Create, organize, search, edit, delete, and share reusable code snippets with secure JWT authentication and a dynamic dashboard.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React Router",
    ],
  },
  {
    projectName: "URL Shortener",
    imageSrc: "/shortener.png",
    githubLink: "https://github.com/amritasrc/url-shortener",
    projectDescrip:
      "A full-stack URL shortener that lets users create short, shareable links and track their visit history. Built with React and Node.js, with a REST API, MongoDB storage, and a clean, responsive interface.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
  },
  {
    projectName: "GitProfile",
    imageSrc: "/gitprofile.png",
    githubLink: "https://github.com/amritasrc/GitProfile",
    link: "https://git-profile-seven.vercel.app/",
    projectDescrip:
      "GitProfile is a simple React-based web app that lets you search and view GitHub user profiles in real time using the GitHub API. It displays key profile details like avatar, bio, repositories, followers, following, location, company, and social links.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "GitHub REST API",
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
    projectName: "LaundryPro",
    imageSrc: "/laundry.png",
    githubLink: "https://github.com/amritasrc/LaundryPro-Website",
    link: "https://laundry-pro-website.vercel.app/",
    projectDescrip:
      "A clean and responsive landing page for a laundry service, built using HTML, CSS, and JavaScript. Features EmailJS integration to send booking requests directly from the website without requiring a backend.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "EmailJS"],
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
    <div>
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
          <h2 className="text-xl uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 font-semibold text-center mb-10">
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectName}
              {...project}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Project;