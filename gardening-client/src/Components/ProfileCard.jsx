import React from 'react'

const ProfileCard = ({ data }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className='relative'>
        <img
          src={data.image}
          alt="Shoes" className='w-full h-[250px]' />
        <span className='bg-primary px-2 py-1 rounded-full text-white absolute top-2 right-2'>{data.status}</span>
      </figure>
      <div className='p-4'>
        <div className="border-b-1 border-gray-400 py-2">
          <h2 className="card-title mt-2">{data.name}</h2>
          <div className='flex justify-between'>
            <span className='text-accent-content text-[16px]'>Location:
            </span>
            <span className='text-black text-[16px]'>{data.location}</span>
          </div>

        </div>
        <div className="border-b-1 border-gray-400 py-2">
          <div className='flex justify-between'>
            <span className='text-accent-content text-[16px]'>Specialty:
            </span>
            <span className='text-black text-[16px]'>{data.specialty}</span>
          </div>

        </div>
        <div className="border-b-1 border-gray-400 py-2">
          <div className='flex justify-between'>
            <span className='text-accent-content text-[16px]'>Experience:
            </span>
            <span className='text-black text-[16px]'>{data.experience}</span>
          </div>

        </div>
        <div className="">

          <div className='flex justify-between'>
            <span className='text-accent-content text-[16px]'>Shared Tips:
            </span>
            <span className='text-black text-[16px]'>{data.shared_tips}</span>
          </div>

        </div>
        <div className="justify-center mt-2 ">
          <button className=" bg-primary text-white w-full py-2 rounded-full text-[18px] font-medium cursor-pointer">View Profile</button>
        </div>
      </div>

    </div>
  )
}

export default ProfileCard
