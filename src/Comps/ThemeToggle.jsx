import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { WiDaySunny } from "react-icons/wi";
import { IoMoon } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            aria-label="Toggle dark mode"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -15, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 15, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-neutral-700 dark:text-neutral-300 flex items-center justify-center"
                >
                    {theme === 'light' ? <IoMoon size={18} /> : <WiDaySunny size={18} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;
