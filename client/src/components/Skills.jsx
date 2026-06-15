import React from 'react'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'
import { skills } from '../assets/assets.js'
const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: false }}
            className='py-20 bg-dark-100'
            id="skills"
        >
            {/* Skill div */}
            <div className='container'>
                <h2 className='text-3xl font-bold text-center  mb-4'>My
                    <span className='text-purple-600'>Skills</span>
                </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Technologies I work with to bring ideas to life</p>
                {/* Skills cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <div key={index} className='bg-dark-300 rounded-2xl p-6  hover:translate-y-2 transition duration-300 cursor-pointer'>
                                <div className='flex items-center mb-4'>
                                    <Icon className='text-purple-600 w-12 h-12 mr-6'>{skill.icon}</Icon>
                                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                                </div>
                                <p className='text-gray-400 mb-4'>{skill.description}</p>
                                <div className='flex flex-wrap gap-2'>{skill.tags.map((tech,index)=>(
                                    <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tech}</span>
                                ))}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills