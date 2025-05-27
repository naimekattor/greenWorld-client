import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../context/AuthProvider'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { themeContext } from './../context/ThemeProvider';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);
  const { setTheme, theme } = useContext(themeContext);
  const handleTheme = () => {
    //console.log(theme);
    console.log(theme);
    setTheme(theme === 'light' ? 'dark' : 'light')


  }
  return (
    <header className='bg-primary py-4' >
      <div className='flex justify-between items-center bg-white p-4 md:w-9/12 w-11/12 mx-auto rounded-full'>
        <div className='font-bold text-primary text-3xl'>
          <span className='md:hidden block text-2xl' onClick={() => setShowMenu(!showMenu)}><FaBarsStaggered /></span>
          <div className='md:block hidden'>
            <span>Green</span> <span className='text-secondary'>World</span>
          </div>
        </div>
        <ul className=' gap-6 text-primary font-semibold md:flex hidden'>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/explore'}>Explore Gardeners</NavLink>
          </li>


          <li>
            <NavLink to={'/tips'}>Browse Tips</NavLink>
          </li>
          {user &&
            <>
              <li>
                <NavLink to={'/share-tip'}>Share a Garden Tip</NavLink>
              </li>
              <li>
                <NavLink to={'/my-tips'}>My Tips</NavLink>
              </li></>
          }

        </ul>
        <div className='flex items-center gap-2'>
          <div className='flex items-center h-[30px]' onClick={handleTheme}>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-[30px] w-[30px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-[30px] w-[30px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {
            user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="avatar cursor-pointer" style={{ position: "relative", zIndex: 50 }}>
                    <div
                      className="w-10 rounded-full"
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content={`Hello, ${user.displayName || "User"}!`}
                      style={{ zIndex: 50 }}
                    >
                      <img src={user?.photoURL} alt="User Avatar" />
                    </div>

                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li onClick={() => logOut()}><a>Logout</a></li>
                </ul>
              </div>

            ) : (
              <div className='bg-primary py-1 px-4 text-white rounded-full'>
                <button><Link to={'auth/login'}>Login</Link></button>
              </div>
            )
          }

        </div>
        <ReactTooltip id="user-tooltip" place="top" style={{ zIndex: 9999, background: 'green', height: '60px', width: '200px' }} className="custom-tooltip" />
      </div>


      {/* Mobile Nav */}

      <div className={`absolute bg-primary z-10 h-screen w-full top-0  md:hidden  flex flex-col  transition-transform duration-300 ${showMenu ? ' translate-x-0' : '-translate-x-full'}`}>
        <div className='flex items-center justify-between p-4'>
          <div className='text-3xl'><span className='text-white'>Green</span> <span className='text-secondary'>World</span></div>
          <span className='text-2xl text-white p-1 border-1 bg-accent-content' onClick={() => setShowMenu(false)}><RxCross1 /></span>
        </div>
        <hr />
        <div className='place-items-center bg-white py-4'>

        </div>
        <div className='py-8 px-4'>
          <nav className=' md:col-span-6 col-span-1 '>
            <ul className='flex flex-col justify-start  gap-6 *:border-b-1 *:py-1 *:inline-block'>
              <NavLink to={'/'} className='text-white font-normal text-lg'>Home</NavLink>


              <NavLink to={'/explore'} className='text-white font-normal text-lg'>Explore Gardeners</NavLink>
              <NavLink to={'/tips'} className='text-white font-normal text-lg'>Browse Tips</NavLink>
              {user &&
                <>
                  <li>
                    <NavLink to={'/share-tip'}>Share a Garden Tip</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/my-tips'}>My Tips</NavLink>
                  </li></>
              }
            </ul>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Navbar
