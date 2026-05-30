import React from 'react'
import Button from './Button'

const ContactCard = ({ Icon, contact, info }) => {
    return (
        <div className="flex items-center gap-4 hover:bg-zinc-100 dark:hover:bg-[#181512] transition cursor-pointer group">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white">
                <Icon size={18} />
            </div>

            <div className="flex flex-col leading-tight">
                <span className='text-zinc-600 dark:text-zinc-400'>
                    Feel free to mail me at:
                    <a className='font-medium underline text-zinc-800 dark:text-zinc-300' href="mailto:dev.amritasrc@gmail.com?" target='_blank'>
                        {info}
                    </a>
                </span>

                {/* <span className="text-xs text-zinc-400">{info}</span> */}
            </div>

        </div>
    )
}


export default ContactCard