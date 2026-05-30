import React from 'react'

const Tech = ({Icon, name, color}) => {
    return (
        <span className="inline-flex gap-1 items-center text-xs px-3 py-2 text-zinc-900 dark:text-zinc-100 bg-zinc-200 dark:bg-[#1f1b17] normal-cursor rounded-2xl transition-colors duration-200 ease-in-out">
            <Icon className={color}/> {name}
        </span>
    )
}

export default Tech