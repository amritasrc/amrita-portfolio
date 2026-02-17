import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imageSrc, projectName, link, projectDescrip }) => {
    return (
        <div className="bg-[#12100e] border border-zinc-800 rounded-2xl overflow-hidden">

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
                <h3 className="flex justify-between items-center font-semibold">
                    {projectName}

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 text-xs bg-[#1f1b17] hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out flex items-center gap-0.5"
                    >
                        Live <MdArrowOutward />
                    </a>

                </h3>

                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {projectDescrip}
                </p>
            </div>

        </div>
    )
}

export default ProjectCard
