import React from 'react'
import { LuPin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Button from './Button';


const Intro = () => {
    return (
        <section className="py-8 border-b border-zinc-800">
            <div className="flex mt-2 items-start">

                <div className="px-4 shrink-0">
                    <img
                        src="/profile.jpg"
                        alt="Profile-img"
                        className="w-20 h-20 rounded-full object-cover border border-zinc-700"
                    />
                </div>

                <div className="pr-4">
                    <h2 className="text-2xl font-semibold">Hello, I'm Amrita!</h2>
                    <h2 className="text-zinc-400">Frontend Web Developer</h2>

                    <p className="text-zinc-200 text-base sm:text-xl mt-2 leading-tight">
                        Building clean, responsive web interfaces with care and curiosity.
                    </p>

                    <p className="flex items-center gap-2 text-zinc-400 mt-3">
                        <LuPin className="mt-1" />
                        <span>Ranchi, Jharkhand</span>
                    </p>

                    <div className="flex gap-3 mt-3 flex-wrap">
                        <Button Icon={FaGithub} link="https://github.com/amritasrc" />
                        <Button Icon={BsTwitterX} link="https://x.com/amritasrc" />
                        <Button Icon={FaLinkedin} link="https://www.linkedin.com/in/amrita-kumari-dev/" />
                        <Button Icon={FaDiscord} link="https://discord.com/users/1354067160862949471"/>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Intro