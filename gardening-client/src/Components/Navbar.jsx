import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../context/AuthProvider'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);

  return (
    <header className='bg-primary py-4' >
      <div className='flex justify-between items-center bg-white p-4 w-9/12 mx-auto rounded-full'>
        <div className='font-bold text-primary text-3xl'>Green <span className='text-secondary'>World</span></div>
        <ul className='flex gap-6 text-primary font-semibold'>
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
          <div>Dark</div>
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

    </header>
  )
}

export default Navbar
