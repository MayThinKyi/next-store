import ProductItemLoading from '@/components/ProductItemLoading'
import React from 'react'

const loading = () => {
  return (
    <div className='px-5 sm:px-10 lg:px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>
        <ProductItemLoading/>

    </div>
  )
}

export default loading