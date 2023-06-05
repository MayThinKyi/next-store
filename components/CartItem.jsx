import Image from 'next/image'
import React from 'react'
import {GrAdd} from 'react-icons/gr';
import {AiOutlineMinus} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addQty ,minusQty, removeItem} from '@/app/redux/features/cartSlice';

const CartItem = ({cartId,productId,img,title,qty,price}) => {
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart.value)

  return (
    <div className='flex gap-3 mb-4 sm:gap-8 '>
      <Image alt={title} className='w-[50px] h-[50px] object-contain' src={img} width={50} height={50} />
      <div>
        <h1 className='font-semibold text-md'>{title}</h1>
        <div className='flex w-[100%] items-center justify-between text-md'>
        <div className='flex items-center justify-between gap-3 sm:gap-6'>
        <AiOutlineMinus onClick={()=>dispatch(minusQty({cartId:cartId}))}   className='font-semibold'/>
        <h1 >{qty}</h1>
        <GrAdd onClick={()=>dispatch(addQty({cartId:cartId}))} className='font-semibold'/>
        </div>
        <h1 onClick={()=>dispatch(removeItem({cartId:cartId}))} className='px-3 py-1 text-sm text-red-500 border border-red-500 rounded'>Remove</h1>
           
            <h1>${price}</h1>
        </div>
      </div>
    </div>
  )
}

export default CartItem
