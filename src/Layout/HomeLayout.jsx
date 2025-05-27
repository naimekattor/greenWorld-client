import React, { useContext } from 'react'
import Home from '../pages/Home'
import Navbar from './../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { themeContext } from '../context/ThemeProvider';

const HomeLayout = () => {
  const { theme } = useContext(themeContext);
  console.log(theme);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main >
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div >
  )
}

export default HomeLayout
