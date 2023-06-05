import ProductItem from '@/components/ProductItem';
import Image from 'next/image'
const fetchProducts=async()=>{
 await new Promise(resolve => setTimeout(resolve, 4000)); 
     const res=await fetch('https://fakestoreapi.com/products/');
  const data=await res.json();
  return data;
}
export default async function Home() {
  
  const products=await fetchProducts();
  return (
    <div className='grid grid-cols-1 gap-12 px-5 py-20 sm:px-10 lg:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products?.map((item)=>{
      return <ProductItem  key={item?.id} product={item} />
    })}</div>
  )
}
