import React from 'react'
import { WiDaySunny } from "react-icons/wi";
import { IoMoon } from "react-icons/io5";
import {easeOut, motion } from 'framer-motion';

import { useTheme } from '../context/ThemeContext';

const Nav = () => {

    const { theme, setTheme } = useTheme();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay:0.8 }}
            className='flex justify-end mb-0.5 pr-6 gap-5 text-2xl'>

            <button
                onClick={() => setTheme("light")}
                className={`${theme === "light" ? "opacity-100" : "opacity-50"}`}
            >
                <WiDaySunny className='w-6' />
            </button>

            <button
                onClick={() => setTheme("dark")}
                className={`${theme === "dark" ? "opacity-100" : "opacity-50"}`}
            >
                <IoMoon className='w-5' />
            </button>

        </motion.nav>
    )
}

export default Nav