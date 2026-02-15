import React from 'react'
import { LuPin } from "react-icons/lu";

const Intro = () => {
    return (
        <section className='py-8'>

            <div className='flex mt-2'>
                <div className='pl-5 pr-6'>
                    <img src="/src/assets/profile.jpg" alt="Profile-img" className='w-20 h-20 rounded-full object-cover border border-dashed border-zinc-200' />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Hello, I'm Amrita!</h2>
                    <h2 className='text-zinc-400'>Frontend Web Developer</h2>
                    <p className="text-zinc-200 text-2xl mt-2 leading-tight">Building clean, responsive web interfaces with care and curiosity.</p>
                    <p className='flex items-center gap-2 text-zinc-400 mt-3'><LuPin className='mt-1.5'/><span>Ranchi, Jharkhand</span></p>
                </div>
            </div>
        </section>
    )
}

export default Intro