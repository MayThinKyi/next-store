import React from 'react'

const ProductItemLoading = () => {
  return (
         <div className="animate-pulse flex  flex-col gap-y-3">
    <div className="rounded  bg-slate-200 h-[160px] w-[160px]"></div>
      <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
  </div>
  )
}

export default ProductItemLoading