import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaMapLocation } from 'react-icons/fa6'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa"
import {IoCall} from "react-icons/io5"

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
    
]

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
    <div className='px-20 py-5'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                    <FiShoppingBag size="30"/>
                    ShopMe
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis est non mauris feugiat gravida in ac diam. Nam tellus lectus, consequat a hendrerit ut, vestibulum ac eros. Nam lacinia suscipit arcu, eget scelerisque magna porta eget. Curabitur sed dapibus dui. Praesent vehicula maximus tellus, ut aliquam libero egestas in. Ut pellentesque consectetur nulla, a ultrices enim dictum eu. Quisque ultricies tortor ut volutpat molestie. Duis suscipit tortor vel augue malesuada, nec tempus ipsum vulputate. Integer consectetur lacus quis tellus consectetur, sed convallis orci tristique. Donec nisi justo, egestas non dui eu, dapibus viverra eros. Etiam condimentum ultricies ultricies.</p>
            </div>
            <div className='lg:pl-60'>
                <div className='py-8 px-4'>
                    <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link)=>{
                              return  <li className='cursor-pointer hover:text-purple-400 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>{link.title}</li>
                            })}
                    </ul>
                </div>
            </div>
            <div className='py-8 px-4  lg:pl-60'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link)=>{
                               return <li className='cursor-pointer hover:text-purple-400 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>{link.title}</li>
                            })}
                    </ul>
            </div>
        </div>
        <div>
            <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                    <FaInstagram className='text-3xl'/>
                </a>
                <a href="#">
                    <FaLinkedin className='text-3xl'/>
                </a>
                <a href="#">
                    <FaFacebook className='text-3xl'/>
                </a>
            </div>
            <div className='mt-6'>
                <div className='flex items-center gap-3'>
                    <FaMapLocation/>
                    <p>Indore, Madhya Pradesh</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <IoCall/>
                    <p>+91 12343 33232</p>
                </div>
            </div>
        </div>
    </div>  
    </div>
  )
}

export default Footer
