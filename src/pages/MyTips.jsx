import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import TipsCard from '../Components/TipsCard'
import { FaEye, FaFilter, FaRegHeart } from 'react-icons/fa'
import { AuthContext } from '../context/AuthProvider'
import { MdDelete } from 'react-icons/md'
import { SiLibreofficewriter } from 'react-icons/si'
import Swal from 'sweetalert2'
const MyTips = () => {
  const initialTips = useLoaderData()
  const [initialTipsData] = useState(initialTips);
  const [tipsData, setTipsData] = useState(initialTips);
  const [selectedTip, setSelectedTip] = useState();
  const [selectedTipId, setSelectedTipId] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(initialTips);

  console.log(user);
  useEffect(() => {
    const data = initialTipsData.filter((data) => data.email === user.email);
    setTipsData(data)



  }, [])
  useEffect(() => {
    console.log('selectedTip changed:', selectedTip);
  }, [selectedTip]);
  // handle popup
  const handlePopup = (id) => {
    document.getElementById('my_modal_2').showModal();
    const selectTip = initialTipsData.find((data) => data._id === id);
    setSelectedTip(selectTip);
    console.log(selectedTip);
  }

  // handle tips delete
  const handleTipsDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://greenworld-server.onrender.com/tips/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = tipsData.filter(tipsData => tipsData._id !== id);
              setTipsData(remaining);
            }
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  // handle tip update
  const handleTipUpdate = (e) => {
    console.log(e);

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTipData = Object.fromEntries(formData.entries());

    fetch(`https://greenworld-server.onrender.com/share-tip/${selectedTip._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTipData)
    }).then(res => res.json()).then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your garden tip has been updated successfully",
          text: "Thank you for contributing to the gardening community!",
          showConfirmButton: false,
          timer: 1500
        });
        document.getElementById('my_modal_2').close();
        const updatedTips = tipsData.map(tip => tip._id === selectedTip._id ? { ...tip, ...updatedTipData } : tip);
        setTipsData(updatedTips);
      } else {
        Swal.fire({
          title: "Something went wrong",
          text: data.message || "Please try again later.",
          icon: "error"
        });
      }
    })
  }
  return (
    <div className='bg-[#f5f9f6]'>
      <div className='max-w-9/12 mx-auto '>
        <h1 className='text-[40px] text-primary font-bold text-center pt-[60px]'>My Tips
        </h1>
        <p className='text-accent-primary text-center w-3/4 mx-auto font-normal mb-[30px]'>Explore shared gardening knowledge and practical advice from our community of garden enthusiasts.
        </p>
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
                        <button className="text-xl cursor-pointer mr-2"><FaEye /></button></Link>

                      <button className="text-xl cursor-pointer mr-2 text-red-500" onClick={() => handleTipsDelete(tipsData._id)}><MdDelete /></button>

                      <button className="text-xl cursor-pointer" onClick={
                        () => handlePopup(tipsData._id)

                      }><SiLibreofficewriter /></button>

                    </th>
                  </tr>
                ))
              }

            </tbody>
            {/* foot */}

          </table>
        </div>
      </div >
      <dialog id="my_modal_2" className="modal bg-white">
        <form action="" onSubmit={handleTipUpdate} className='modal-box'>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Title</legend>
            <input type="text" defaultValue={selectedTip?.title || ""} name='title' className="input w-full" placeholder="e.g., How I Grow Tomatoes Indoors" />

          </fieldset>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Plant Type/Topic</legend>
              <input type="text" name='plat-type' className="input w-full" placeholder="e.g., Tomato, Garden Design, etc." />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Difficulty Level</legend>
              <select name='difficulty' onChange={(e) => console.log(e.target.name, e.target.value)} defaultValue={selectedTip?.difficulty} className="select">
                <option disabled={true}>Pick one</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea name='description' defaultValue={selectedTip?.description || ""} className="textarea w-full h-24" placeholder="Describe your garden tip in detail..."></textarea>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Image URL</legend>
            <input type="text" defaultValue={selectedTip?.imageUrl || ""} name='imageUrl' className="input w-full" placeholder="https://example.com/your-image.jpg" />

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
              <input type="text" defaultValue={user.displayName} name='name' readOnly className="input w-full" placeholder="My name" />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input type="text" defaultValue={user.email} name='email' readOnly className="input w-full" placeholder="My email" />

            </fieldset>
          </div>
          <div className='bg-primary text-white py-2 rounded-lg mt-4 text-center cursor-pointer'>
            <button className='cursor-pointer'>Update Tip</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default MyTips
