import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/sale.png";
import Image3 from "../../assets/hero/shopping.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme CSS

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all mens wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque egestas scelerisque. Donec et hendrerit turpis, ut tincidunt est. Cras velit dolor, mollis tempus velit ut, auctor ultricies eros. Etiam rutrum porttitor dictum. Aenean ac erat eget ligula congue faucibus quis volutpat lorem. Pellentesque hendrerit purus eget velit pellentesque rutrum."
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 30% off on all women wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque egestas scelerisque. Donec et hendrerit turpis, ut tincidunt est. Cras velit dolor, mollis tempus velit ut, auctor ultricies eros. Etiam rutrum porttitor dictum. Aenean ac erat eget ligula congue faucibus quis volutpat lorem. Pellentesque hendrerit purus eget velit pellentesque rutrum."
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all Products sale",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque egestas scelerisque. Donec et hendrerit turpis, ut tincidunt est. Cras velit dolor, mollis tempus velit ut, auctor ultricies eros. Etiam rutrum porttitor dictum. Aenean ac erat eget ligula congue faucibus quis volutpat lorem. Pellentesque hendrerit purus eget velit pellentesque rutrum."
    }
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
            {/* Background shape */}
            <div className='h-[700px] w-[700px] bg-blue-500/40 absolute top-1 right-0 rounded-3xl rotate-45 '></div>

            {/* Slider */}
            <div className='container mx-auto px-4'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                {/* Text content */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm'>
                                        {data.description}
                                    </p>
                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                        <button
                                            onClick={handleOrderPopup}
                                            className='bg-gradient-to-r from-purple-400 to-green-300 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                        >
                                            Order now
                                        </button>
                                    </div>
                                </div>

                                {/* Image content */}
                                <div className='order-1 sm:order-2'>
                                    <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                                        <img
                                            src={data.img}
                                            alt="slider images"
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-100 object-contain mx-auto'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;