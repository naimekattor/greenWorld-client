import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const ShareTip = () => {
  const { user } = useContext(AuthContext);

  const handleTipSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    const sharedTipData = Object.fromEntries(formData.entries());
    console.log(sharedTipData);

    //send form data to server
    fetch('http://localhost:4000/share-tip', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(sharedTipData)
    })
      .then(res => res.json())
      .then(data => console.log(data)
      )

  }
  return (
    <div>
      <h1 className='text-[40px] text-primary font-bold text-center mt-[60px]'>Share a Garden Tip
      </h1>
      <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Share your gardening knowledge and techniques with the community.
      </p>
      <div className='p-8 border max-w-4xl mx-auto mb-[60px]'>
        <form action="" onSubmit={handleTipSubmit}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Title</legend>
            <input type="text" name='title' className="input w-full" placeholder="e.g., How I Grow Tomatoes Indoors" />

          </fieldset>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Plant Type/Topic</legend>
              <input type="text" name='plat-type' className="input w-full" placeholder="e.g., Tomato, Garden Design, etc." />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Difficulty Level</legend>
              <select name='difficulty' onChange={(e) => console.log(e.target.name, e.target.value)} defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick one</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea name='description' className="textarea w-full h-24" placeholder="Describe your garden tip in detail..."></textarea>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Image URL</legend>
            <input type="text" name='imageUrl' className="input w-full" placeholder="https://example.com/your-image.jpg" />

          </fieldset>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <select name='category' defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick one</option>
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Availability</legend>
              <select name='availability' defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick one</option>
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </fieldset>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input type="text" defaultValue={user.displayName} name='name' readOnly className="input w-full" placeholder="My awesome page" />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input type="text" defaultValue={user.email} name='email' readOnly className="input w-full" placeholder="My awesome page" />

            </fieldset>
          </div>
          <div className='bg-primary text-white py-2 rounded-lg mt-4 text-center cursor-pointer'>
            <button className='cursor-pointer'>Share Garden Tip</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ShareTip
