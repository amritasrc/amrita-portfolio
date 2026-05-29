import React from 'react'

const Button = ({ Icon, link }) => {
    return (
        <a
            href={link}
            target='_blank'
            className='px-4 py-2 bg-zinc-200 dark:bg-[#1f1b17] hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-all duration-200 ease-in-out'
        >
            <Icon />
        </a>
    )
}

export default Button