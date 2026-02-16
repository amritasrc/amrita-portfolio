import React from 'react'
import { LuPin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Button from './Button';


const Intro = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>

            <div className='flex mt-2'>
                <div className='pl-5 pr-5'>
                    <img src="/public/profile.jpg" alt="Profile-img" className='w-21 h-20 rounded-full object-cover border border-zinc-700' />
                </div>

                <div>
                    <h2 className='text-2xl font-semibold'>Hello, I'm Amrita!</h2>
                    <h2 className='text-zinc-400'>Frontend Web Developer</h2>
                    <p className="text-zinc-200 text-xl mt-2 leading-tight">Building clean, responsive web interfaces with care and curiosity.</p>

                    <p className='flex items-center gap-2 text-zinc-400 mt-3'><LuPin className='mt-1.5' /><span>Ranchi, Jharkhand</span></p>

                    <div className='flex gap-3 mt-3'>

                        <Button Icon={FaGithub} />
                        <Button Icon={BsTwitterX}/>
                        <Button Icon={FaLinkedin}/>
                        <Button Icon={FaDiscord}/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro