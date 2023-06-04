/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {CgClose} from 'react-icons/cg'
import { toggleSideBarState } from '@/app/redux/features/storeSlice';
import { useSiderBarContext } from '@/app/context/ContextProvider';
import Link from 'next/link';
const Sidebar = () => {
   // const dispatch = useDispatch();
   // const sideBarState = useSelector((state) => state.store.sideBarState);
  const {siderBarState,setSideBarState} =useSiderBarContext()
  return (<>
  {siderBarState? 
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.5)]'>
        <div className='relative z-[999] transition-all ease-in-out  p-8 top-0 left-0 h-[100vh] w-[290px] sm:w-[400px] bg-[#000]'>
            <div  onClick={()=>setSideBarState(!siderBarState)} className='text-white  flex justify-end'>
                <CgClose className='cursor-pointer'  size={28} color='#fff'/>
            </div>
            <div className='flex flex-col text-white'>
                 <Link href={'/'} className='uppercase mb-4 text-[16px] tracking-[1px]'>ALL</Link>
                <Link href={'/products/electronics'} className='uppercase mb-4 text-[16px] tracking-[1px]'>Electronics</Link>
                <Link href={'/products/jewelery'} className='uppercase mb-4 text-[16px] tracking-[1px]'>jewelery</Link>
                <Link href={"/products/men's clothing"} className='uppercase mb-4 text-[16px] tracking-[1px]'>men's clothing</Link>
                <Link href={"/products/women's clothing"} className='uppercase mb-4 text-[16px] tracking-[1px]'>women's clothing</Link>
                <Link href={'/login'} className='uppercase mb-4 text-[16px] tracking-[1px]'>login</Link>

            </div>
        </div>
    </div> : ''}
    </>
  )
}

export default Sidebar