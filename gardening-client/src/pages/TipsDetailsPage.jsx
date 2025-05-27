import React from 'react'
import { FaArrowLeft, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { MdIosShare } from 'react-icons/md';
import { Navigate, useLoaderData } from 'react-router'

const TipsDetailsPage = () => {
  const tipsDetails = useLoaderData();
  console.log(tipsDetails);

  return (
    <div className='max-w-9/12 mx-auto'>
      <div className='text-secondary text-lg flex gap-2 items-center' onClick={() => Navigate('/tips')}><span><FaArrowLeft /></span>Back To Tips</div>
      <div className='grid grid-cols-12 gap-6 items-start py-8'>
        <div className='col-span-8  shadow-2xl'>
          <img src={tipsDetails?.imageUrl} alt={tipsDetails.title} className='w-full h-[450px] rounded-2xl' />
        </div>
        <div className='col-span-4 bg-white shadow-2xl p-4 inline-block'>
          <div className='flex items-center gap-2'>
            <img src={tipsDetails?.imageUrl} alt="" className='w-10 h-10 rounded-full' />
            <div className='flex flex-col gap-1
            '>
              <span>{tipsDetails.name || "Demo User"}</span>
              <span>{tipsDetails.email || "demouser@gmail.com"}</span>
            </div>
          </div>
          <div className='flex items-center gap-2 py-4'>
            <span><IoPersonSharp /></span>
            <span>{tipsDetails.name || "Demo User"}</span>
          </div>
          <div className='flex items-center gap-2 pb-4'>
            <span><FaCalendarAlt /> </span>
            <span>{tipsDetails?.date || "24 April 2025"}</span>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center gap-2 bg-primary text-white py-2 rounded-full justify-center text-lg'>
              <button><FaHeart /> </button>
              <button>10</button>
            </div>
            <div className='flex items-center gap-2 bg-primary text-white py-2 rounded-full justify-center text-lg'>
              <button><MdIosShare /> </button>
              <button>Share</button>
            </div>
          </div>

        </div>
      </div>
      <div>
        <h1 className='text-[30px] text-black font-bold mb-4'>{tipsDetails?.title}</h1>
        <div>
          <span className='py-1 px-2 bg-amber-500 mr-1 rounded-full text-white'>{tipsDetails.category}</span>
          <span className='py-1 px-2 bg-primary mr-1 rounded-full text-white'>{tipsDetails.difficulty}</span>
          <span className='py-1 px-2 bg-secondary mr-1 rounded-full text-white'>{tipsDetails?.plat_type || "Garden"}</span>
        </div>
        <div className='py-4'>
          <p className='text-accent-content'>{tipsDetails.description}</p>
        </div>
      </div>
    </div>
  )
}

export default TipsDetailsPage
