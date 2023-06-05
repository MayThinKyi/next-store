import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import {FaUser} from 'react-icons/fa'
import CartIcon from './CartIcon'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-5 border-b sm:px-20'>
        <HamburgerMenu/>
        <h1 className='text-2xl font-semibold'>Next Store</h1>
        <div className='flex items-center gap-3 sm:gap-8'>
            <FaUser size={23} />
            <CartIcon/>   
        </div>
    </div>
  )
}

export default Navbar