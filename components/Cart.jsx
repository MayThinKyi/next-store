'use client'
import { useSiderBarContext } from '@/app/context/ContextProvider';
import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { emptyCart } from '@/app/redux/features/cartSlice';
import { toast } from 'react-toastify';
const Cart = () => {
  const dispatch=useDispatch()
    const {cartSideBarState,setCartSideBarState} =useSiderBarContext();
const cart=useSelector((state)=>state.cart.value);
const [total,setTotal]=useState(0);
const emptyCartFun=()=>{
  dispatch(emptyCart())
  setTotal(0)
  cart?.length>0 ?  toast("Emptied the cart successfully!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: "success",
  }) : ''
 
}
const checkOutFun=()=>{
  dispatch(emptyCart())
  setTotal(0)
  cart?.length>0 ?  toast("Checked out  successfully!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: "success",
  }) : ''
 
}
useEffect(()=>{
  let price=0;

  cart?.map((item)=>{
     price+=item?.price*item?.qty
     return setTotal(price.toFixed(2))
  })
  cart?.length==0 ? setTotal(0):'';
 
},[cart])
  return (<div>
  {cartSideBarState?
   <div className='fixed  z-[999] cursor-pointer  top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.5)]'>
   <div className='absolute py-8 px-5 z-[999] top-0 right-0  h-[100vh] w-[300px] sm:w-[400px] bg-[#fff]'>
     <div className='flex items-center justify-between'>
         <h1 className='text-xl font-semibold'>Cart</h1>
         <GrClose onClick={()=>setCartSideBarState(false)} size={26} />
     </div>
     <div className='my-8 h-[320px] overflow-y-scroll'>
      {cart?.map((item)=>{
        return <CartItem key={item?.cartId} {...item}  />
      })}
      {cart?.length<1 && <h1 className='font-semibold'>No items in the cart...</h1>}
     </div>
     <div className='flex items-center justify-between'>
         <h1 className='text-lg font-semibold'>SUBTOTAL</h1>
         <h1>${total}</h1>
     </div>
     <div onClick={emptyCartFun}  className='w-[100%] uppercase text-center mt-5 mb-3  px-10 py-2  cursor-pointer border border-red-500 text-red-500'>
      Empty cart
     </div>
     <button onClick={checkOutFun} disabled={cart?.length<1 ? true:false }  className='w-[100%] uppercase text-center  mb-3  px-10 py-2  cursor-pointer bg-[#000] hover:bg-[#524F4F] text-[#fff]'>
      Checkout
     </button>

   </div>
 </div>
   : ''}
  </div>
   
  )
}

export default Cart
