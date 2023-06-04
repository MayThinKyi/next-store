import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <Link href={`/product/${product?.id}`} className='cursor-pointer'>
        <Image width={200} height={200} className=' mx-auto hover:opacity-80 transition-all ease-in-out mb-3 w-[200px] h-[200px] object-contain' src={product?.image} alt={product?.title} />
        <h1 className='font-semibold mb-1'>{product?.title}</h1>
        <h1>${product?.price}</h1>
    </Link>
  )
}

export default ProductItem