import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/amritasrc",
        label: "GitHub",
    },
    {
        icon: BsTwitterX,
        href: "https://x.com/amritasrc",
        label: "X (Twitter)",
    },
    {
        icon: FaDiscord,
        href: "https://discord.com/users/1354067160862949471",
        label: "Discord",
    },
    {
        icon: BsInstagram,
        href: "https://instagram.com/_amritaa.13",
        label: "Instagram",
    },
    {
        icon: BiLogoGmail,
        href: "mailto:dev.amritasrc@gmail.com",
        label: "Email",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-20 text-center max-w-2xl mx-auto flex flex-col items-center justify-center border-t border-zinc-300 dark:border-zinc-700"
            id="contact"
        >
            <h2 className="text-xl uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 font-semibold mb-6">
                Get in touch
            </h2>

            <p className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-300 tracking-tight max-w-md mb-8">
                Interested in working together? Let's build something great.
            </p>

            <a
                href="mailto:dev.amritasrc@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-md cursor-pointer mb-12"
            >
                <Mail size={16} />
                Mail Me
            </a>

            <div className="flex items-center gap-6">
                {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                            }}
                            className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-colors cursor-pointer"
                            aria-label={social.label}
                        >
                            <Icon size={20} />
                        </motion.a>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Contact;