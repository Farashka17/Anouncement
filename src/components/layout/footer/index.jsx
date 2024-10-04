import React from 'react'
import { IoDiamond } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <IoDiamond className='w-6 h-6 text-pink-500'/>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
        <FaFacebookF className='w-5 h-5'/>
        </a>
        <a className="ml-3 text-gray-500">
        <IoLogoTwitter className='w-5 h-5'/>

        </a>
        <a className="ml-3 text-gray-500">
        <FaInstagram className='w-5 h-5'/>

        </a>
        <a classname="ml-3 text-gray-500">
        <FaLinkedinIn className='w-5 h-5'/>
        </a>
      </span>
    </div>
  </footer>
  )
}

export default Footer
