import React from 'react'
import { LuPin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Intro = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>

            <div className='flex mt-2'>
                <div className='pl-5 pr-5'>
                    <img src="/src/assets/profile.jpg" alt="Profile-img" className='w-21 h-20 rounded-full object-cover border border-zinc-700' />
                </div>

                <div>
                    <h2 className='text-3xl font-semibold'>Hello, I'm Amrita!</h2>
                    <h2 className='text-zinc-400'>Frontend Web Developer</h2>
                    <p className="text-zinc-200 text-2xl mt-2 leading-tight">Building clean, responsive web interfaces with care and curiosity.</p>

                    <p className='flex items-center gap-2 text-zinc-400 mt-3'><LuPin className='mt-1.5' /><span>Ranchi, Jharkhand</span></p>

                    <div className='flex gap-3 mt-3'>

                        <button className='px-4 py-2 bg-zinc-800/75 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-opacity duration-200 ease-in-out'>
                            <FaGithub />
                        </button>

                        <button className='px-4 py-2 bg-zinc-800/75 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-opacity duration-200 ease-in-out'>
                            <BsTwitterX />
                        </button>

                        <button className='px-4 py-2 bg-zinc-800/75 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-opacity duration-200 ease-in-out'>
                            <FaLinkedin />
                        </button>

                        <button className='px-4 py-2 bg-zinc-800/75 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-opacity duration-200 ease-in-out'>
                            <FaInstagram />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro