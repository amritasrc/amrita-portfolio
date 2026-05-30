import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';

const GithubCalender = () => {
    return (
        <section className='py-8 border-b border-zinc-300 dark:border-zinc-800'>

            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-300 dark:border-zinc-800'>
                Github Contributions
            </h2>
            <div>
                <GitHubCalendar username="amritasrc"/>
            </div>
        </section>
    )
}

export default GithubCalender