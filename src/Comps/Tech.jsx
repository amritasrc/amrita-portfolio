import React from 'react'

const Tech = ({Icon, name, color}) => {
    return (
        <span className="inline-flex gap-1 items-center px-4 py-2 bg-zinc-800/70 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-colors duration-200 ease-in-out">
            <Icon className={color} /> {name}
        </span>
    )
}

export default Tech