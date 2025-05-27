import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const AuthLayOut = () => {
  return (
    <div>
      {/* <header className='sticky top-0 left-0 z-50 bg-white shadow-md'>
        <Navbar />
      </header> */}
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default AuthLayOut
