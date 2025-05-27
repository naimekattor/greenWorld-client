import React from 'react'
import { useLoaderData } from 'react-router'
import ProfileCard from '../Components/ProfileCard';

const ExploreGardeners = () => {
  const gardenersData = useLoaderData();
  console.log(gardenersData);

  return (
    <div className='max-w-9/12 mx-auto'>
      <h1 className='text-[40px] text-primary font-bold text-center mt-[60px]'>Explore Gardeners
      </h1>
      <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Connect with fellow garden enthusiasts and discover their specialties, experience, and shared tips.

      </p>
      <div className='text-center '>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-[60px]'>
        {
          gardenersData && gardenersData.map((data, index) => (
            <ProfileCard data={data} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ExploreGardeners
