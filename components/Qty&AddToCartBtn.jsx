'use client'
import { addToCart } from '@/app/redux/features/cartSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast ,ToastContainer} from 'react-toastify';

const QtyAndAddToCartBtn = ({id,img,title,price}) => {
   const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);
    const addToCartFun=()=>{
      dispatch(addToCart({
        cartId:Math.random(),
        productId:id,
        img:img,
        title:title,
        price:price,
        qty:Number(qty)
      }));
      toast("Added to cart successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type: "success",
      });
      
      
    }
    const [qty,setQty]=useState(1);

  return (<>
    <div className='flex items-center gap-2'>
    <ToastContainer/>
    <input className='w-[100px] outline-none border rounded p-1'
     min={1} value={qty} type='number' onChange={(e)=>setQty(e.target.value)} />
    <h1 >Quantity</h1>
</div>
    <div onClick={addToCartFun} className='w-[230px] sm:w-[250px] text-center mt-8 mb-3  px-10 py-2  cursor-pointer bg-[#000] hover:bg-[#524F4F] text-[#fff]'>Add To Cart</div>
    </>
  )
}

export default QtyAndAddToCartBtn
