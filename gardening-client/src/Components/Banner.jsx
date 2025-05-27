import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gardener1 from '/images/gardener1.jpeg'
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        /* autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} */
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className='bg-[url(/images/banner1.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
            <div className='flex gap-6 max-w-8/12 mx-auto items-center'>
              <div className='max-w-6/12'>
                <h1 className='text-white text-[60px] font-normal uppercase  mt-[20px]'> Modern Gardening With Greenola</h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence! Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener1} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide><div className='bg-[url(/images/banner2.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
          <div className='bg-[url(/images/banner1.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
            <div className='flex gap-6 max-w-8/12 mx-auto items-center'>
              <div className='max-w-6/12'>
                <h1 className='text-white text-[60px] font-normal uppercase  mt-[20px]'> Modern Gardening With Greenola</h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence! Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener1} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div></div></SwiperSlide>
        <SwiperSlide><div className='bg-[url(/images/banner3.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
          <div className='bg-[url(/images/banner1.jpg)] w-full h-[700px] bg-center object-cover bg-no-repeat'>
            <div className='flex gap-6 max-w-8/12 mx-auto items-center'>
              <div className='max-w-6/12'>
                <h1 className='text-white text-[60px] font-normal uppercase  mt-[20px]'> Modern Gardening With Greenola</h1>
                <p className='text-white text-[20px] font-normal mt-[28px]'> Elevate your environment with our unrivaled expertise and passion for excellence! Our rich legacy to your green dreams into reality.</p>
                <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>Join Event</button>
              </div>
              <div className=' border-[20px] border-secondary rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px] max-w-6/12'>
                <img src={gardener1} alt="gardener" className='w-[600px] h-[1000px] rounded-bl-[1000px] rounded-br-[50px] rounded-tl-[1000px] rounded-tr-[1000px]' />
              </div>
            </div>

          </div></div></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
