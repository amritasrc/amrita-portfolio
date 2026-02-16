import React from 'react'
import Button from './Button'

const ContactCard = ({ Icon, contact, info }) => {
    return (
        <div className="flex items-center gap-4 p-4 border border-zinc-800 hover:bg-[#181512] transition cursor-pointer group">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 group-hover:text-white">
                <Icon size={18} />
            </div>

            <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium">{contact}</span>
                <span className="text-xs text-zinc-400">{info}</span>
            </div>

        </div>
    )
}


export default ContactCard