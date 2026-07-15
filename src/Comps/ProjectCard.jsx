import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const ProjectCard = ({
    imageSrc,
    projectName,
    projectDescrip,
    technologies = [],
    githubLink,
    link,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <motion.article
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                }}
                className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 backdrop-blur-sm shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
            >
                {/* Image */}
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-zoom-in overflow-hidden"
                >
                    <img
                        src={imageSrc}
                        alt={projectName}
                        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex h-full flex-col p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                            {projectName}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {projectDescrip}
                    </p>

                    {/* Tech Stack */}
                    {technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-zinc-200/40 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/40 px-2 py-1 text-[11px] text-zinc-500 dark:text-zinc-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-5 flex items-center gap-4">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaGithub size={14} />
                            Code
                        </a>

                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <ExternalLink size={14} />
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.article>

            {/* Image Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-5"
                    >
                        <motion.img
                            src={imageSrc}
                            alt={projectName}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 22,
                            }}
                            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
                        />

                        <motion.button
                            onClick={() => setIsOpen(false)}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-6 top-6 text-white"
                        >
                            <X size={34} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard