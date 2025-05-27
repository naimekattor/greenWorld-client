import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gardener1 from '/images/gardener1.jpeg'
import gardener2 from '/images/gardener2.jpg'
import gardener3 from '/images/gardener3.jpg'
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className='bg-[url(/images/banner1.jpg)] w-full md:h-[700px] h-screen bg-center object-cover bg-no-repeat'>
            <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-3 md:max-w-8/12 w-11/12 mx-auto items-center'>
              <div className='md:max-w-6/12 w-11/12'>
                <h1 className='text-white md:text-[60px] text-[32px] font-normal uppercase  mt-[20px]'> Modern Gardening With
                  <Typewriter
                    words={[' GreenWorld', 'Execelent', 'Greenola!']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                  />  </h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence!
                  Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener1} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide><div className='bg-[url(/images/banner2.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
          <div className='bg-[url(/images/banner1.jpg)] w-full md:h-[700px] h-screen bg-center object-cover bg-no-repeat'>
            <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-3 md:max-w-8/12 w-11/12 mx-auto items-center'>
              <div className='md:max-w-6/12 w-11/12'>
                <h1 className='text-white text-[60px] font-normal uppercase  mt-[20px]'> Modern Gardening With <Typewriter
                  words={[' GreenWorld', 'Execelent', 'Greenola!']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}

                /></h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence! Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener2} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div></div></SwiperSlide>
        <SwiperSlide><div className='bg-[url(/images/banner3.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
          <div className='bg-[url(/images/banner1.jpg)] w-full md:h-[700px] h-screen bg-center object-cover bg-no-repeat'>
            <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-3 md:max-w-8/12 w-11/12 mx-auto items-center'>
              <div className='md:max-w-6/12 w-11/12'>
                <h1 className='text-white text-[60px] font-normal uppercase  mt-[20px]'> Modern Gardening With <Typewriter
                  words={[' GreenWorld', 'Execelent', 'Greenola!']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}

                /></h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence! Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener3} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div></div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
