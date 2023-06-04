import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import {FaShoppingCart,FaUser} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='py-5 px-5  sm:px-20 border-b flex items-center justify-between'>
        <HamburgerMenu/>
        <h1 className='text-2xl font-semibold'>Next Store</h1>
        <div className='flex items-center gap-3 sm:gap-8'>
            <FaUser size={23} />
        <FaShoppingCart size={26} />
        </div>
    </div>
  )
}

export default Navbar