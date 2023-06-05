'use client'
import { useSiderBarContext } from '@/app/context/ContextProvider';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const {cartSideBarState,setCartSideBarState} =useSiderBarContext();
    const cart=useSelector((state)=>state.cart.value);

  return (
    <div className='relative cursor-pointer'>
        <FaShoppingCart onClick={()=>setCartSideBarState(!cartSideBarState)} size={26} />
        {cart?.length>0 ? 
        <div className='absolute bg-black text-sm text-white px-1 rounded-full top-[-10px] right-[-10px]'>
        {cart?.length}
        </div>  :''}
    </div>
  )
}

export default CartIcon
