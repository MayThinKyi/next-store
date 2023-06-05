import React from 'react'

const ProductPageLoading = () => {
  return (
    <div>
  <div className="flex flex-wrap animate-pulse md:flex-nowrap md:space-x-20">
    <div className="rounded-lg bg-slate-200 h-[300px] w-[300px] sm:w-[350px]"></div>
    <div className="flex-1 py-1 mt-8 space-y-6 md:mt-0">
      <div className="h-3 rounded-lg bg-slate-200"></div>
      <div className="h-3 rounded-lg bg-slate-200"></div>
        <div className="h-3 rounded-lg bg-slate-200"></div>
        <div className="h-3 rounded-lg bg-slate-200"></div>
        <div className="h-3 rounded-lg bg-slate-200"></div>
        <div className="h-10 bg-slate-200 w-[260px] sm:w-[300px] rounded"></div>
        <div className="h-10 bg-slate-200 w-[260px] sm:w-[300px]  rounded"></div>
    </div>
</div>
<div class="h-3 my-5 bg-slate-200 rounded-lg"></div>
    <div class="h-14 my-5 bg-slate-200 rounded-lg"></div>
    </div>
  )
}

export default ProductPageLoading
