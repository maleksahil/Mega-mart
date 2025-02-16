import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-20 bg-slate-700 dark:bg-gray-800 text-white'>
      <div className='container back-drop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified about New Products</h1>
            <input type='email' data-aos="fade-up" placeholder='enter your email' className='w-full p-3 bg-white text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
