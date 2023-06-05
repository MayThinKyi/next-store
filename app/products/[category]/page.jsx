import ProductItem from '@/components/ProductItem';
import React from 'react'
const fetchProductsByCatrgories=async(param)=>{
  await new Promise(resolve => setTimeout(resolve, 3000)); 
    const res=await fetch( `https://fakestoreapi.com/products/category/${param} ` );
    const data=await res.json();
    return data;
}
const CategoryPage = async({params}) => {
    const productsData=await fetchProductsByCatrgories(params?.category);
  return (
    <div className='grid grid-cols-1 gap-12 px-5 py-20 sm:px-10 lg:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {productsData?.map((item)=>{
    return <ProductItem  key={item?.id} product={item} />
  })}</div>
  )
}

export default CategoryPage
