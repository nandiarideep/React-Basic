import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-1 py-3 bg-indigo-500'>
        <ul className='text-white flex justify-end space-x-3 font-medium text-lg'>
            <li className='cursor-pointer px-4 py-1 rounded-xl hover:bg-[#f76f02] transition-all duration-75 '>Home</li>
            <li className='cursor-pointer px-4 py-1 rounded-xl hover:bg-[#f76f02] transition-all duration-75 '>About</li>
            <li className='cursor-pointer px-4 py-1 rounded-xl hover:bg-[#f76f02] transition-all duration-75 '>Contact</li>
            <li className='cursor-pointer px-4 py-1 rounded-xl hover:bg-[#f76f02] transition-all duration-75 '>Get Started</li>
        </ul>
    </nav>
  )
}

export default Navbar