import React from 'react'
import ProjectCard from './ProjectCard'
import project1 from '../assets/p1.png'

const Project = () => {
    return (
        <section className='py-8 border-b border-zinc-800'>
            <h2 className='pl-5 py-1.5 font-semibold text-xl border-b border-t border-zinc-800 mb-3'>
                Projects
            </h2>

            <div className='grid grid-cols-2 gap-3 p-2'>
                <ProjectCard
                    imageSrc={project1}
                    projectName="Color Palette Generator"
                    projectDescrip="A responsive web app that generates harmonious color palettes instantly. Built using HTML, CSS, and JavaScript, featuring dynamic color generation, one-click clipboard copying, and clean UI interactions for designers and developers."
                />

                <ProjectCard
                    imageSrc="/public/p2.png"
                    projectName="Gradient Generator"
                    projectDescrip="A sleek gradient generator web app that instantly creates visually balanced color transitions. Users can generate random gradients, preview them in real time, and copy ready-to-use CSS code with a single click."
                />
            </div>
        </section>


    )
}

export default Project