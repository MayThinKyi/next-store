import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import {FaUser} from 'react-icons/fa'
import CartIcon from './CartIcon'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-5 border-b sm:px-20'>
        <HamburgerMenu/>
        <Link href='/' className='text-2xl font-semibold'>Next Store</Link>
        <div className='flex items-center gap-3 sm:gap-8'>
            
            <CartIcon/>   
        </div>
    </div>
  )
}

export default Navbar