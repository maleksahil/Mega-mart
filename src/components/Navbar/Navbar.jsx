import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    },
];

const Dropdownlist = [
    {
        id: 1,
        name: "Tranding Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
];

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 duration-200 relative z-40'>
            {/* Top Bar */}
            <div className='bg-purple-400 py-2'>
                <div className='container mx-auto px-4 flex justify-between items-center'>
                    {/* Logo */}
                    <div>
                        <a href="#" className='font-bold text-xl items-center flex gap-1'>
                            <FiShoppingBag size="30" />
                            ShopMe
                        </a>
                    </div>

                    {/* Search, Cart, and Dark Mode */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar */}
                        <div className='relative group hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:border-1 focus:border-purple-400 dark:border-gray-500 dark:bg-slate-800 dark:text-white'
                            />
                            <IoMdSearch className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-purple-400 dark:text-gray-400' />
                        </div>

                        {/* Cart Button */}
                        <button
                            onClick={handleOrderPopup}
                            className='bg-gradient-to-t from-purple-400 to-green-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                        >
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>

                        {/* Dark Mode Toggle */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div data-aos="zoom-in" className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4 py-3'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-purple-400 duration-200 dark:text-white dark:hover:text-purple-400'>
                                {data.name}
                            </a>
                        </li>
                    ))}

                    {/* Dropdown Menu */}
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-[2px] py-2 dark:text-white'>
                            Tranding Products
                            <span>
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md'>
                            <ul>
                                {Dropdownlist.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-purple-400/20 dark:hover:bg-purple-400/30'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;