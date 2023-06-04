import ProductItem from '@/components/ProductItem';
import Image from 'next/image'
const fetchProducts=async()=>{
 await new Promise(resolve => setTimeout(resolve, 10000)); 
     const res=await fetch('https://fakestoreapi.com/products/');
  const data=await res.json();
  return data;
}
export default async function Home() {
  
  const products=await fetchProducts();
  return (
    <div className='px-5 sm:px-10 lg:px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
      {products?.map((item)=>{
      return <ProductItem  key={item?.id} product={item} />
    })}</div>
  )
}
