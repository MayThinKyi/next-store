"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sideBarState:true
};
export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    toggleSideBarState:(state)=>{
      state.sideBarState=!state.sideBarState;
      console.log('state updted')
    }
  
  },
});

export const { addToCart,toggleSideBarState } = storeSlice.actions;
export default storeSlice.reducer;