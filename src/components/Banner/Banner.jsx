import React from 'react';
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi"; // Added a new icon for variety

const Banner = () => {
  return (
    <div className='min-h-[500px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* Image Section */}
          <div data-aos="zoom-in" className='order-2 sm:order-1'>
            <img
              className='max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-lg'
              src={BannerImg}
              alt="Banner Img"
            />
          </div>

          {/* Text Content Section */}
          <div className='order-1 sm:order-2 flex flex-col justify-center gap-6'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>
              Winter Sale Upto 50% Off
            </h1>
            <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus augue nec nibh sagittis, dignissim tempus magna aliquet. Ut luctus vulputate lorem in commodo. Curabitur libero lacus, blandit venenatis lacinia at, imperdiet sit amet est. Vestibulum finibus vulputate tellus, sit amet porta neque volutpat ut. Cras ut ipsum metus. Aliquam iaculis dui elit, sed porta risus feugiat in. Donec nec erat sagittis, elementum ligula sed, commodo dolor.
            </p>

            {/* Icons Section */}
            <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiMoneyStack className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;