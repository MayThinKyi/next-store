/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import {CgClose} from 'react-icons/cg'
import { useSiderBarContext } from '@/app/context/ContextProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Sidebar = () => {
    const router=useRouter();
   
  const {siderBarState,setSideBarState} =useSiderBarContext();
  const changeRoute=async(href)=>{
await new Promise(resolve => setTimeout(resolve, 500)); 

    router.push(href);
    setSideBarState(false);
  }
  return (<>
  {siderBarState? 
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.5)]'>
        <div className='relative z-[999] transition-all ease-in-out  p-8 top-0 left-0 h-[100vh] w-[290px] sm:w-[400px] bg-[#000]'>
            <div  onClick={()=>setSideBarState(!siderBarState)} className='flex justify-end text-white'>
                <CgClose className='cursor-pointer'  size={28} color='#fff'/>
            </div>
            <div className='flex flex-col text-white cursor-pointer'>
                 <div onClick={()=>changeRoute('/')} className='uppercase mb-4 text-[16px] tracking-[1px]'>ALL</div>
                <div onClick={()=>changeRoute('/products/electronics')} className='uppercase mb-4 text-[16px] tracking-[1px]'>Electronics</div>
                <div onClick={()=>changeRoute('/products/jewelery')} className='uppercase mb-4 text-[16px] tracking-[1px]'>jewelery</div>
                <div onClick={()=>changeRoute("/products/men's clothing")} className='uppercase mb-4 text-[16px] tracking-[1px]'>men's clothing</div>
                <div onClick={()=>changeRoute("/products/women's clothing")} className='uppercase mb-4 text-[16px] tracking-[1px]'>women's clothing</div>
                <div onClick={()=>changeRoute('/login')} className='uppercase mb-4 text-[16px] tracking-[1px]'>login</div>

            </div>
        </div>
    </div> : ''}
    </>
  )
}

export default Sidebar