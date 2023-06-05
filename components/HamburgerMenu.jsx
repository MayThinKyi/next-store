'use client'
import { useSiderBarContext } from '@/app/context/ContextProvider';
import React from 'react'
import {BiMenu} from 'react-icons/bi'
const HamburgerMenu = () => {
    const {siderBarState,setSideBarState} =useSiderBarContext();   
  return (
    <div>
        <BiMenu className='cursor-pointer' size={28} onClick={()=>setSideBarState(!siderBarState)} />
    </div>
  )
}

export default HamburgerMenu