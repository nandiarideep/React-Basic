import React from 'react'
import { CiBarcode } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header class="text-gray-600 body-font bg-blue-400">
          <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span class="text-5xl m-0"> <CiBarcode /> </span>
                <span class="ml-3 text-xl">Produc--Teefy</span>
              </a>
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <Link to='/' smooth={true} duration={500}><a class="mr-5 hover:text-white-900 cursor-pointer text-white" href='/'>Home</a></Link>
                  <Link to='products' smooth={true} duration={500}><a class="mr-5 hover:text-white-900 cursor-pointer text-white" href='products'>Products</a></Link>
                  <Link to='team' smooth={true} duration={500}><a class="mr-5 hover:text-white-900 cursor-pointer text-white" href='team'>Our Team</a></Link>
                  <Link to='contact' smooth={true} duration={500}><a class="mr-5 hover:text-white-900 cursor-pointer text-white" href='contact'>Contact</a></Link>
              </nav>
               <Link to='signin'><button href='signin' target='_blank' class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Be a Member</button></Link>
          </div>
      </header>
  )
}

export default Header