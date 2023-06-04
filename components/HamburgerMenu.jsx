'use client'
import { useSiderBarContext } from '@/app/context/ContextProvider';
import { toggleSideBarState } from '@/app/redux/features/storeSlice';
import React from 'react'
import {BiMenu} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
const HamburgerMenu = () => {
    const {siderBarState,setSideBarState} =useSiderBarContext()

    //const dispatch = useDispatch();
    //const sideBarState = useSelector((state) => state.store.sideBarState);
  return (
    <div>
        <BiMenu className='cursor-pointer' size={28} onClick={()=>setSideBarState(!siderBarState)} />
    </div>
  )
}

export default HamburgerMenu