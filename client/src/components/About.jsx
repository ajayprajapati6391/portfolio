import React from 'react'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'
import { assets } from "../assets/assets"
import { aboutInfo } from '../assets/assets.js'
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      className='py-20 bg-dark-200'
      id="abouts"
    >
      {/* About div */}
      <div className='container'>
        <h2 className='text-3xl font-bold text-center  mb-4'>About
          <span className='text-purple-600'>Me</span>
        </h2>
        <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
        {/* About content div */}
        <div className='flex flex-col md:flex-row mx-10 gap-12'>
          {/* image div */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              src={assets.profileImg}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              viewport={{ once: false }}
              className='w-full h-full object-cover'
              alt="" 
              />
          </div>
          {/* content div */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: false }}
            className='md:w-1/2'>

            <div className='rounded-e-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>I'm a passionate MERN Stack Developer and BCA student with a strong interest in building modern, user-friendly web applications. My journey started with learning HTML, CSS, and JavaScript, which inspired me to explore the world of full-stack development.</p>
              <p className='text-gray-300 mb-6'>I have developed projects using MongoDB, Express.js, React, and Node.js (MERN Stack), gaining hands-on experience in creating responsive front-end interfaces, RESTful APIs, database management, and full-stack web applications. Through personal and academic projects, I have strengthened my problem-solving abilities and understanding of modern web development practices.</p>
              <p className='text-gray-300 mb-6'>I enjoy learning new technologies, improving my coding skills, and working on projects that solve real-world problems. As a fresher, I am eager to begin my professional journey, contribute to innovative projects, and continue growing as a software developer.</p>

            </div>

            {/* card div */}
            <div className='grid gri-cols-1 md:grid-cols-2 gap-6'>
              {aboutInfo.map((about, index) => {
                const Icon = about.icon
                return (
                  <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transfrom duration-300 hover:translate-y-2 cursor-pointer'>
                    <Icon className='text-purple-600 text-4xl mb-4'>{about.icon}</Icon>
                    <h3 className='text-xl font-semibold mb-3'>{about.title}</h3>
                    <p className='text-gray-400'>{about.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </motion.div>
  )
}

export default About