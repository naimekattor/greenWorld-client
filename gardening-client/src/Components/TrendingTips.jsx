import React, { useEffect, useState } from 'react'
import TipsCard from './TipsCard';
import { Link } from 'react-router';

const TrendingTips = () => {
  const [tipsData, setTipsData] = useState();
  console.log(tipsData);

  useEffect(() => {
    const data = fetch('http://localhost:4000/tips')
      .then(res => res.json())
      .then(data => setTipsData(data)
      )
  }, [])
  return (
    <div className='max-w-9/12 mx-auto'>
      <h1 className='text-[40px] text-primary font-bold text-center mt-[60px]'>Top Trending Tips
      </h1>
      <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Discover the most popular gardening advice and techniques shared by our community.



      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          tipsData && tipsData.slice(0, 6).map((tipsData) => (
            <TipsCard tipsData={tipsData} />
          ))
        }
      </div>
      <div className='text-center'>
        <Link to={'/tips'}><button className='text-primary text-[24px] font-medium  bg-secondary px-[55px] py-4 rounded-full my-6 cursor-pointer'>View All Tips</button></Link>


      </div>

    </div>
  )
}

export default TrendingTips
