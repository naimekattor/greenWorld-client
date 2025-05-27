import React from 'react'
import { AiFillAndroid, AiFillApple } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className='bg-primary text-white p-10'>
      <div className="flex md:flex-row flex-col justify-between max-w-9/12 mx-auto ">
        <nav className='flex flex-col'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <div>
          <h6 className="text-sm font-semibold text-gray-400 uppercase mb-4">Follow Us</h6>
          <div className="flex space-x-4 mb-6">
            <a href="https://facebook.com/naimekattor" target="_blank" className="bg-secondary hover:bg-white text-primary rounded-full p-2">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/naimekattor" target="_blank" className="bg-secondary hover:bg-white text-primary rounded-full p-2">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/naimekattor" target="_blank" className="bg-secondary hover:bg-white text-primary rounded-full p-2">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/naimekattor" target="_blank" className="bg-secondary hover:bg-white text-primary rounded-full p-2">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@NaimTheVai" target="_blank" className="bg-secondary hover:bg-white text-primary rounded-full p-2">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-gray-400 uppercase mb-2">Download Mobile App</h6>
            <div className="flex space-x-2">
              <a href="#" className="bg-secondary hover:bg-white text-primary rounded-md p-2 flex items-center text-sm">
                <AiFillApple className="w-5 h-5 mr-2" />
                App Store
              </a>
              <a href="#" className="bg-secondary hover:bg-white text-primary rounded-md p-2 flex items-center text-sm">
                <AiFillAndroid className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </div>
          </div>
        </div>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>

  )
}

export default Footer
