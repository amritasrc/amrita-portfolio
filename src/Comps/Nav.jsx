import React from 'react'
import { WiDaySunny } from "react-icons/wi";
import { IoMoon } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Nav = () => {
    return (
        <nav className='flex justify-end mb-0.5 pr-6 gap-5'>
            <span><WiDaySunny /></span>
            <span><IoMoon /></span>
            <span><HiOutlineDesktopComputer /></span>
        </nav>
    )
}

export default Nav