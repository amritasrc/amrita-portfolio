import React from 'react'
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imageSrc, projectName, link, projectDescrip, githubLink }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="bg-white dark:bg-[#12100e] border border-zinc-300 dark:border-zinc-800 rounded-2xl overflow-hidden">

            {/* Image header */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={imageSrc}
                    alt={projectName}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="cursor-pointer flex justify-between items-center font-semibold">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer">{projectName}</a>

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 text-xs bg-zinc-200 dark:bg-[#1f1b17] hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out flex items-center gap-0.5"
                    >
                        Live <MdArrowOutward className='text-green-500' />
                    </a>

                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {projectDescrip}
                </p>
            </div>

        </motion.div>
    )
}

export default ProjectCard