import React from 'react'
import Image from 'next/image'
import QtyInput from '@/components/QtyInput';
const fetchProductById=async(id)=>{
    //await new Promise(resolve => setTimeout(resolve, 10000)); 

    const res=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data=await res.json();
    return data;
}
const ProductPage =async ({params}) => {
    const productData=await fetchProductById(params?.id)
  return (
    <div className='px-5 sm:px-10 lg:px-20 py-20'>
      <div className='flex flex-wrap md:flex-nowrap gap-12'> 
            <Image width={350} height={300} className='mx-auto h-[200px]  md:h-[300px] object-contain' alt={productData?.title} src={productData?.image}/>
            <div className='mt-[-10px] md:mt-0'>
                 <h1 className='font-semibold text-xl mb-3 md:mb-6'>{productData?.title}</h1>
                 <h1 className='mb-3'>${productData?.price}</h1>
              <QtyInput/>
                <div className='w-[230px] sm:w-[250px] text-center mt-8 mb-3  px-10 py-2  cursor-pointer bg-[#000] hover:bg-[#524F4F] text-[#fff]'>Add To Cart</div>
                <div className='w-[230px] sm:w-[250px] text-center  mb-3 px-10 py-2 cursor-pointer bg-[#fff] border border-black  text-[#000]'>Buy It Now</div>

            </div>
      </div>
      <div className='mt-10 flex flex-wrap sm:flex-nowrap gap-2 items-center'>
        <h1 className='font-[500]'>Category:</h1>
        <h1 className='bg-[#F1EFEF] text-sm font-[500] py-2 px-5 text-black uppercase '>{productData?.category}</h1>
      </div>
      <h1 className='mt-5 '>{productData?.description}</h1>

    </div>
  )
}

export default ProductPage
