import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import TipsCard from '../Components/TipsCard'
import { FaEye, FaFilter, FaRegHeart } from 'react-icons/fa'

const TipsPage = () => {
  const initialTips = useLoaderData()
  const [initialTipsData] = useState(initialTips);
  const [tipsData, setTipsData] = useState(initialTips);
  //console.log(tipsData);

  const handleOnChange = (e) => {
    const selectedValue = e.target.value

    if (selectedValue === "All Level") {
      setTipsData(initialTipsData);
    } else {
      const updatedTipsData = initialTipsData.filter((data) => data.difficulty === selectedValue);
      setTipsData(updatedTipsData);
      console.log(e.target.value);
    }


  }
  return (
    <div className='bg-[#f5f9f6]'>
      <div className='max-w-9/12 mx-auto '>
        <h1 className='text-[40px] text-primary font-bold text-center pt-[60px]'>Browse Garden Tips
        </h1>
        <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Explore shared gardening knowledge and practical advice from our community of garden enthusiasts.
        </p>
        <div className='flex gap-2 items-center mb-4'>
          <span><FaFilter /></span>
          <span>Filter by difficulty:

          </span>
          <select defaultValue="All Level" name='difficulty' onChange={handleOnChange} className="select">
            <option >All Level</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table bg-[#f5f9f6] shadow-lg border-1 border-gray-400/50 mb-[60px]">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Likes</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                tipsData && tipsData.map((tipsData) => (
                  <tr >
                    <td>
                      {tipsData.title}

                    </td>
                    <td>{tipsData.category}</td>
                    <td className={`${tipsData.difficulty === "Easy" ? "bg-primary text-secondary inline-block rounded-full " : tipsData.difficulty === "Medium" ? "bg-yellow-400/50 text-amber-700 inline-block rounded-full" : "bg-pink-400/60 text-red-600 inline-block rounded-full"}`}>{tipsData.difficulty}</td>

                    <td className=' text-lg'> <span className='inline-block mr-1'><FaRegHeart /></span>5</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={tipsData.imageUrl}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>

                      </div>
                    </td>
                    <th>
                      <Link to={`/tips/${tipsData._id}`}>
                        <button className="text-xl cursor-pointer"><FaEye /></button></Link>

                    </th>
                  </tr>
                ))
              }

            </tbody>
            {/* foot */}

          </table>
        </div>
      </div >
    </div>
  )
}

export default TipsPage
