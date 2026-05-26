import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>
            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-800 mb-3'>
                Projects
            </h2>

            <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2">

                <ProjectCard
                imageSrc="/expense-tracker.png"
                projectName="Expense Tracker"
                link="https://expense-tracker-orcin-tau-32.vercel.app/"
                projectDescrip="A web app for tracking daily expenses, allowing users to add, categorize, and manage spending with real-time total calculation and a simple user-friendly interface."
                />

                <ProjectCard
                    imageSrc="/yt-studymode.png"
                    projectName="YouTube StudyMode Extension"
                    link="https://github.com/amritasrc/YT-StudyMode-Extension"
                    projectDescrip="A browser extension that removes distractions from YouTube by hiding recommendations and comments, helping users stay focused on study content."
                />

                <ProjectCard
                    imageSrc="./aniverse.png"
                    projectName="Aniverse"
                    link="https://ani-verse-lake.vercel.app/"
                    projectDescrip="A web app built using an anime API that lets users explore, search, and discover anime with details like ratings, genres, and summaries in a clean, interactive interface."
                />

                <ProjectCard
                    imageSrc="/background-gradient.png"
                    projectName="Background Gradient Generator"
                    link="https://background-gradient-generator-inky.vercel.app/"
                    projectDescrip="A web tool that lets users create and customize CSS gradients in real time. It supports multiple gradient types, live preview, and instant CSS code copy, making UI design faster and more efficient."
                />
            </div>
        </section>


    )
}

export default Project