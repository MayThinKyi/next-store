"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value:[
   
  ]
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value=[...state.value,action.payload]
    },
    addQty:(state,action)=>{
      state.value=state.value?.map((item)=>{
        if(item?.cartId==action.payload.cartId){
          item={...item,qty:item.qty+=1}
        }
        return item;
      }) 
    },
    minusQty:(state,action)=>{
      state.value=state.value?.map((item)=>{
        if(item?.cartId==action.payload.cartId){
        if(item?.qty>1){
          item={...item,qty:item.qty-=1}
        }
        }
        return item;
      }) 
    },
    emptyCart:(state)=>{
      state.value=[]
    }
  
  },
});

export const { addToCart,addQty,minusQty ,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;