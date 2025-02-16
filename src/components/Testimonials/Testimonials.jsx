import React from 'react'
import Slider from "react-slick"

const TestimonialsData = [
    {
        id:1,
        name: "victor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, lectus vitae porta porta, justo ipsum auctor ipsum, sed lobortis urna neque eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi vitae est maximus porta. Cras scelerisque dolor vel nunc elementum molestie sit amet ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies suscipit enim, et dignissim ex porta et.",
        img: "https://picsum.photos/id/237/201/300",
    },
    {
        id:2,
        name: "satya",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, lectus vitae porta porta, justo ipsum auctor ipsum, sed lobortis urna neque eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi vitae est maximus porta. Cras scelerisque dolor vel nunc elementum molestie sit amet ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies suscipit enim, et dignissim ex porta et.",
        img: "https://picsum.photos/id/237/200/301",
    },
    {
        id:3,
        name: "Virat Vikram",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, lectus vitae porta porta, justo ipsum auctor ipsum, sed lobortis urna neque eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi vitae est maximus porta. Cras scelerisque dolor vel nunc elementum molestie sit amet ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies suscipit enim, et dignissim ex porta et.",
        img: "https://picsum.photos/id/237/200/302",
    },
    {
        id:4,
        name: "lachra seth",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, lectus vitae porta porta, justo ipsum auctor ipsum, sed lobortis urna neque eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi vitae est maximus porta. Cras scelerisque dolor vel nunc elementum molestie sit amet ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies suscipit enim, et dignissim ex porta et.",
        img: "https://picsum.photos/id/237/200/303",
    },
    {
        id:5,
        name: "lalit burari",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, lectus vitae porta porta, justo ipsum auctor ipsum, sed lobortis urna neque eu felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mi vitae est maximus porta. Cras scelerisque dolor vel nunc elementum molestie sit amet ac arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies suscipit enim, et dignissim ex porta et.",
        img: "https://picsum.photos/id/237/200/304",
    },
]

const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className=''>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-purple-400'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis est non mauris feugiat gravida in ac diam.
                    </p>
                </div>
                <div data-aos="zoom-in" className='px-2'>
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className='my-6 px-2'>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-2 rounded-xl dark:bg-slate-600 bg-purple-50 relative'>
                                    <div className='mb-4 flex justify-center'>
                                        <img 
                                            src={data.img} 
                                            alt={data.name} 
                                            className='rounded-full w-20 h-20 object-cover border-4 border-purple-200 dark:border-slate-400'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4 text-center'>
                                        <div className='space-y-3'>
                                            <p className='text-sm text-gray-600 dark:text-slate-300 leading-relaxed'>
                                                {data.text}
                                            </p>
                                            <h1 className='text-xl font-bold text-gray-800 dark:text-slate-100'>
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 dark:text-white/20 text-9xl font-serif absolute top-0 right-0 -mt-4 mr-4 z-0'>
                                        ”
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials