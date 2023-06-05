import React from 'react'
import Image from 'next/image'
import QtyAndAddToCartBtn from '@/components/Qty&AddToCartBtn';

const fetchProductById=async(id)=>{
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    const res=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data=await res.json();
    return data;
}
const ProductPage =async ({params}) => {
    const productData=await fetchProductById(params?.id)
  return (
    <div className='px-5 py-20 sm:px-10 lg:px-20'>
     
      <div className='flex flex-wrap gap-12 md:flex-nowrap'> 
            <Image width={350} height={300} className='mx-auto h-[200px]  md:h-[300px] object-contain' alt={productData?.title} src={productData?.image}/>
            <div className='mt-[-10px] md:mt-0'>
                 <h1 className='mb-3 text-xl font-semibold md:mb-6'>{productData?.title}</h1>
                 <h1 className='mb-3'>${productData?.price}</h1>
                  <QtyAndAddToCartBtn id={productData?.id}
                   img={productData?.image} 
                   title={productData?.title}  price={productData?.price} />
                <div className='w-[230px] sm:w-[250px] text-center  mb-3 px-10 py-2 cursor-pointer bg-[#fff] border border-black  text-[#000]'>Buy It Now</div>

            </div>
      </div>
      <div className='flex flex-wrap items-center gap-2 mt-10 sm:flex-nowrap'>
        <h1 className='font-[500]'>Category:</h1>
        <h1 className='bg-[#F1EFEF] text-sm font-[500] py-2 px-5 text-black uppercase '>{productData?.category}</h1>
      </div>
      <h1 className='mt-5 '>{productData?.description}</h1>

    </div>
  )
}

export default ProductPage
