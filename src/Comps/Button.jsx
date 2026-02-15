import React from 'react'

const Button = ({Icon}) => {
    return (
        <button className='px-4 py-2 bg-zinc-800/75 hover:bg-zinc-800 rounded-2xl cursor-pointer transition-opacity duration-200 ease-in-out'>
           <Icon/>
        </button>
    )
}

export default Button