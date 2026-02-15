import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Tech from './Tech';

const Stack = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>

            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-800'>Stack</h2>

            <div className='px-5 my-3 flex flex-wrap gap-2'>

                <Tech Icon={IoLogoJavascript} name="JavaScript" color="text-yellow-300" />
                <Tech Icon={FaReact} name="React" color="text-[#61DAFB]" />
                <Tech Icon={SiTailwindcss} name="Tailwind CSS" color="text-[#38B2AC]" />
                <Tech Icon={FaNodeJs} name="NodeJS" color="text-[#43853D]" />

            </div>

        </section>
    )
}

export default Stack

