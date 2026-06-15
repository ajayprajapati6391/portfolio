import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { assets } from "../assets/assets"
const Hero = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 50 }}
                transition={{ duration: 0.6, ease: easeOut }}
                viewport={{ once: true }}
                id='home'
                className='min-h flex items-center pt-20 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>

                <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                    {/* Left div */}
                    <div className='md:1/2 mb-10 md:mb-0'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-3'>Hi I'm <span className='text-purple-600'>Ajay Prajapati</span></h1>
                        <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
                        <p className='text-lg  text-gray-300 mb-8'>Hi I am a passionate Software Engineer and Full Stack Developer with strong skills in building modern, responsive, and user-friendly web applications. I work with a wide range of programming languages and frameworks to create efficient, scalable, and secure digital solutions.</p>

                        <div className='flex space-x-4 mb-8'>
                            <Link to='/projects' className='px-6 py-3 bg-purple-600 rounded-lg  font-medium hover:bg-purple-700 transition duration-300'>View Work</Link>
                            <Link to='/contact'
                                className='px-6 py-3 bg-purple-600 rounded-lg  font-medium hover:bg-purple-700 transition duration-300'>Contact Me</Link>
                        </div>
                    </div>
                    {/* Rirht */}
                    <div className='md:w-1/2 flex justify-center '>
                        <div className='relative rounded-full inset-0 w-60 h-60 '>
                            <img src={assets.profileImg} alt="" className='w-60 h-60 rounded-full object-cover' alt='Profile' />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero