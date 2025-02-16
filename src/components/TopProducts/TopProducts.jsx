import React from 'react'
import Img1 from "../../assets/shirt/shirt.png" // Adjusted folder name if necessary
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
]

const TopProducts = ({ handleOrderPopup }) => {
    return (
        <div className='container mx-auto py-8'>
            <div className='text-left mb-8 px-4'>
                <p data-aos="fade-up" className='text-sm text-purple-400'>Top Rated Products for You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold mt-2'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400 mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mt-[100px]">
                {ProductsData.map((data) => (
                    <div 
                        key={data.id}
                        data-aos="zoom-in"
                        className='relative rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-purple-400 transition-colors duration-300 group text-center p-6 shadow-xl max-w-[300px] mx-auto'
                    >
                        <div className=''>
                            <img 
                                src={data.img} 
                                alt={data.title}
                                className='max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 transition-transform duration-300 drop-shadow-md'
                            />
                        </div>
                        <div className='mt-[-20px]'>
                            <div className='flex justify-center gap-1 text-yellow-500 mb-2'>
                             
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                            
                            </div>
                            <h2 className='text-xl font-bold mb-2'>{data.title}</h2>
                            <p className='text-gray-500 group-hover:text-white dark:group-hover:text-white line-clamp-2 text-sm mb-4'>
                                {data.description}
                            </p>
                            <button
                                onClick={handleOrderPopup}
                                className='bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105'
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopProducts