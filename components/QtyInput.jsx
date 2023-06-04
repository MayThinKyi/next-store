'use client'
import React, { useState } from 'react'

const QtyInput = () => {
    const [qty,setQty]=useState(1)
  return (
    <div className='flex gap-2 items-center'>
    <input className='w-[100px] outline-none border rounded p-1'
     min={1} value={qty} type='number' onChange={(e)=>setQty(e.target.value)} />
    <h1 >Quantity</h1>
</div>
  )
}

export default QtyInput
