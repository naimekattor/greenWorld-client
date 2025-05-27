import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';
import { Link } from 'react-router';

const Featured = () => {
  const [gardeners, setGardeners] = useState();
  console.log(gardeners);

  useEffect(() => {
    const data = fetch('https://greenworld-server.onrender.com/explore')
      .then(res => res.json())
      .then(data => setGardeners(data.filter((data) => data.status === "active"))
      )
  }, [])



  return (
    <div className='max-w-9/12 mx-auto'>
      <h1 className='text-[40px] text-primary font-bold text-center mt-[60px]'>Featured Gardeners
      </h1>
      <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Meet our most active gardening enthusiasts who share their knowledge and passion with the community.

      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          gardeners && gardeners.slice(0, 6).map((data) => (
            <ProfileCard data={data} />
          ))
        }
      </div>
      <div className='text-center'>
        <Link to={'/explore'}>
          <button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>View All</button>
        </Link>
      </div>

    </div>
  )
}

export default Featured
