import React from 'react'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'
import { assets } from "../assets/assets"
import { projects } from '../assets/assets.js'
import ProjectCard from './ProjectCard.jsx'
const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true }}
            className='py-20 bg-dark-200'
            id="projects"
        >
            {/* Projects div */}
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center  mb-4'>My
                    <span className='text-purple-600'>Projects</span>
                </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>A collection of projects developed during my studies and practice.</p>

                {/* Projects cards  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project}/>
                    )
                    )}
                </div>

            </div>

        </motion.div>
    )
}

export default Projects