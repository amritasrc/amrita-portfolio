import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-8 text-center max-w-2xl mx-auto"
            id="about"
        >
            <h2 className="text-lg uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 font-semibold mb-6">
                About Me
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-[17px]">
                3rd-year B.Tech Computer Science student who enjoys turning ideas into clean, functional, and engaging software.
            </p>

            <p className="mt-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-[17px]">
                Curious about modern technologies and always eager to learn, build, and improve with every project.
            </p>
        </motion.section>
    );
};

export default About;