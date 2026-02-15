import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Stack = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>

            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-800'>Stack</h2>

            <div className='px-5 my-3 flex flex-wrap gap-2'>

                <span className="inline-flex gap-1 items-center px-4 py-2 bg-zinc-800/70 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out">
                    <IoLogoJavascript className='text-yellow-300' /> Javascript
                </span>

                <span className="inline-flex gap-1 items-center px-4 py-2 bg-zinc-800/70 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out">
                    <FaReact className='text-[#61DAFB]'/> React
                </span>

                <span className="inline-flex gap-1 items-center px-4 py-2 bg-zinc-800/70 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out">
                    <SiTailwindcss className='text-[#38B2AC]'/> Tailwind CSS
                </span>

                <span className="inline-flex gap-1 items-center px-4 py-2 bg-zinc-800/70 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out">
                    <FaNodeJs className='text-[#43853D]'/> NodeJS
                </span>

            </div>

        </section>
    )
}

export default Stack