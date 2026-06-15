import React, { useState } from 'react'
import { nav, tr } from 'framer-motion/client'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <p className='text-3xl font-bold text-white'>Ajay <span className='text-purple-600'>Prajapati</span></p>
                </div>
                <div className='hidden md:flex space-x-10'>
                    <a href='/' className='relative text-white transition duration-300 hover:text-purple-600 group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#abouts' className='relative text-white transition duration-300 hover:text-purple-600 group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#skills' className='relative text-white transition duration-300 hover:text-purple-600 group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#projects' className='relative text-white transition duration-300 hover:text-purple-600 group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#contacts' className='relative text-white transition duration-300 hover:text-purple-600 group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </div>

                {/* Mobile button */}
                <div className='md:hidden'>
                    {
                        showMenu ?
                            <FaXmark className='text-2xl cursor-pointer' onClick={() => setShowMenu(false)} /> :
                            <FaBars className='text-2xl cursor-pointer' onClick={() => setShowMenu(true)} />

                    }
                </div>
            </div>
            {/* Mobile menus  */}
            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        <a href='' className='relative text-white transition duration-300 hover:text-purple-600 group' onClick={() => setShowMenu(false)}>
                            <span>Home</span>
                        </a>

                        <a href='#abouts' className='relative text-white transition duration-300 hover:text-purple-600 group' onClick={() => setShowMenu(false)}>
                            <span>About</span>

                        </a>

                        <a href='#skills' className='relative text-white transition duration-300 hover:text-purple-600 group' onClick={() => setShowMenu(false)}>
                            <span>Skills</span>

                        </a>

                        <a href='#projects' className='relative text-white transition duration-300 hover:text-purple-600 group' onClick={() => setShowMenu(false)}>
                            <span>Projects</span>

                        </a>

                        <a href='#contacts' className='relative text-white transition duration-300 hover:text-purple-600 group' onClick={() => setShowMenu(false)}>
                            <span>Contact</span>

                        </a>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar