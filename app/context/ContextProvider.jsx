'use client'
import { createContext, useContext, useState } from "react";
 const  SiderBarContext=createContext({});
export const SiderBarProvider=({children})=>{
    const [siderBarState,setSideBarState]=useState(false);
        return (<SiderBarContext.Provider value={{siderBarState,setSideBarState}}>
            {children}
        </SiderBarContext.Provider>)
}
export const useSiderBarContext = () => useContext(SiderBarContext);
