import React from 'react'
import Home from '../pages/Home'
import Navbar from './../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div >
  )
}

export default HomeLayout
