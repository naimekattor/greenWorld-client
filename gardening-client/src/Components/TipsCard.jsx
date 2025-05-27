import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const TipsCard = ({ tipsData }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className='relative'>
        <img
          src={tipsData.imageUrl}
          alt="Shoes" className='h-[280px] w-full' />
        <div className='absolute bottom-2 flex justify-between w-full px-4 items-center'>
          <div className='flex flex-col'>
            <span className='bg-primary px-2 py-1 rounded-full text-white'>{tipsData.category}</span>
            <span className='text-white'>Difficulty: {tipsData.difficulty}</span>
          </div>
          <div className='flex gap-1 items-center'>
            <span><FaRegHeart /></span>
            <span>10</span>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tipsData.tips_title}</h2>
        <p>{tipsData.description}</p>
        <div className="card-actions justify-between">
          <span className='text-[14px] text-accent-content'>By {tipsData.name || "Demo User"}</span>
          <button className="text-primary text-[18px] font-medium flex gap-1 items-center cursor-pointer">Read More <span><MdKeyboardDoubleArrowRight /></span></button>
        </div>
      </div>
    </div>
  )
}

export default TipsCard
