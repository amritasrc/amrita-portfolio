import React from 'react'
import ContactCard from './ContactCard'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
    return (
        <section className=" border-b border-zinc-800">

            <h2 className="pl-5 py-1.5 font-semibold text-xl border-y border-zinc-800">
                Contact
            </h2>

            <div>
                <ContactCard Icon={BiLogoGmail} contact="Email" info="dev.amritasrc@gmail.com" />
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2">
                <ContactCard Icon={BiLogoGmail} contact="Email" info="dev.amritasrc@gmail.com" />
                <ContactCard Icon={FaGithub} contact="GitHub" info="@amritasrc" />
                <ContactCard Icon={BsTwitterX} contact="X (Twitter)" info="@amritasrc" />
                <ContactCard Icon={FaDiscord} contact="Discord" info="@amritasrc" />
            </div> */}

        </section>
    )
}


export default Contact