import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import axios from 'axios'
const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:5000/contact',
                form
            );

            if (response.status === 200) {
                console.log(response.data);
                alert(response.data.message);
            }

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: false }}
            className='py-20 bg-dark-200'
            id="contacts"
        >

            {/* Contact div */}
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center  mb-4'>Reach
                    <span className='text-purple-600'>Out</span>
                </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Technologies I Work With</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    <div>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input type="text" name="name" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4  py-3 outline-none' required value={form.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Your Email</label>
                                <input type="email" name="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4  py-3 outline-none' value={form.email} onChange={handleChange} required />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Message</label>
                                <textarea name="message" id='message' className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4  py-3 outline-none' value={form.message} onChange={handleChange} required />
                            </div>
                            <button disabled={loading} type='submit' className='w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'> {loading ? "Sending..." : "Send"}</button>
                        </form>
                    </div>
                    {/* Contact information */}
                    <div className='space-y-8'>
                        <div className='flex items-start mb-4'>
                            <div className='text-purple-600 text-2xl mr-4'><FaMapMarkerAlt /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Pratapgrah</p>
                            </div>
                        </div>

                        <div className='flex items-start mb-4'>
                            <div className='text-purple-600 text-2xl mr-4'><FaEnvelope /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>ajay951738kk@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start mb-4'>
                            <div className='text-purple-600 text-2xl mr-4'><FaPhone /></div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 () 6391608493</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/ajayprajapati6391" target='_blanck' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-600 hover:bg-purple-700 hover:text-white transition duration-300'><FaGithub /></a>
                                <a href="www.linkedin.com/in/ajay-code66" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'><FaLinkedin /></a>
                                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'><FaTwitter /></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </motion.div>
    )
}

export default Contact