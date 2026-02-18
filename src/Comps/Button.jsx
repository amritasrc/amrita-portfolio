import React from 'react'

const Button = ({Icon, link}) => {
    return (
        <a href={link} target='_blank' className='px-4 py-2 bg-[#1f1b17] hover:bg-zinc-800 rounded-xl cursor-pointer transition-opacity duration-200 ease-in-out'>
           <Icon/>
        </a>
    )
}

export default Button