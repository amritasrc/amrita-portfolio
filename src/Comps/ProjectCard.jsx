import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowTrendUp } from "react-icons/fa6";

const ProjectCard = ({
    imageSrc,
    projectName,
    link,
    projectDescrip,
    githubLink
}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
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
            <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 },
                }}
                className="bg-white dark:bg-[#12100e] border border-zinc-300 dark:border-zinc-800 rounded-2xl overflow-hidden"
            >
                {/* Image Header */}
                <div
                    className="h-48 w-full overflow-hidden cursor-zoom-in"
                    onClick={() => setIsOpen(true)}
                >
                    <img
                        src={imageSrc}
                        alt={projectName}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="flex justify-between items-center font-semibold">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {projectName}
                        </a>

                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1 text-xs bg-zinc-200 dark:bg-[#1f1b17] hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-2xl transition-colors duration-200 flex items-center gap-1"
                        >
                            Live
                            <FaArrowTrendUp className="text-green-500 text-lg" />
                        </a>
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                        {projectDescrip}
                    </p>
                </div>
            </motion.div>

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.img
                            src={imageSrc}
                            alt={projectName}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 22,
                            }}
                        />

                        <motion.button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 text-white text-4xl leading-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ×
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;