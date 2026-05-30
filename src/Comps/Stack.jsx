import React from 'react'
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb"
import { FiFigma } from "react-icons/fi";
import Tech from './Tech';

const Stack = () => {
    return (
        <section className='py-8 border-b border-zinc-300 dark:border-zinc-800'>

            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-300 dark:border-zinc-800'>
                Skills
            </h2>

            <div className='px-5 my-3 flex flex-wrap gap-2'>

                <Tech Icon={SiJavascript} name="JavaScript" color="dark:text-yellow-300" />
                <Tech Icon={FaReact} name="React" color="dark:text-[#61DAFB]" />
                <Tech Icon={SiTailwindcss} name="Tailwind CSS" color="dark:text-[#38B2AC]" />
                <Tech Icon={FaNodeJs} name="NodeJS" color="dark:text-[#43853D]" />
                <Tech Icon={FaHtml5} name="HTML" color="dark:text-[#E44D26]" />
                <Tech Icon={FaCss3Alt} name="CSS" color="dark:text-[#2965f1]" />
                <Tech Icon={FaGitAlt} name="Git" color="dark:text-[#F1502F]" />
                <Tech Icon={FaGithub} name="GitHub" color="dark:text-[#000000] dark:text-[#ffffff]" />
                <Tech Icon={FaJava} name="Java" color="dark:text-[#ED8B00]" />
                <Tech Icon={TbBrandCpp} name="C/C++" color="dark:text-[#659AD2]"/>
                <Tech Icon={TbBrandFramerMotion} name="Framer Motion" color="dark:text-[#0055FF]" />
                <Tech Icon={FiFigma} name="Figma" color="dark:text-[#a259ff]" />
            </div>

        </section>
    )
}

export default Stack