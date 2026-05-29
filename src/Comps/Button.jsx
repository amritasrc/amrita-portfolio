import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ Icon, link }) => {
    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={link}
            target='_blank'
            className='px-4 py-2 bg-zinc-200 dark:bg-[#1f1b17] hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-all duration-200 ease-in-out'
        >
            <Icon />
        </motion.a>
    )
}

export default Button