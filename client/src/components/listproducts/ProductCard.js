import React from 'react'

const ProductCard = ({ product }) => {

  const { image, name, description, price } = product
  return (
    <div className='rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 duration-100'>
      <div className='w-full h-72'>
        <img src={require(`../../assets/products/${image}.jpg`)} alt={`${image}`}
          className='w-full h-full object-contain	' />
      </div>
      <div className='flex flex-col items-center my-2 py-2'>
        <span className='font-body text-slate-500 block font-bold text-xl'>{name}</span>
        <center><span className='font-body text-slate-500 block my-3'>{description}</span></center>
        <span className='font-body text-slate-500'>₹{price}</span>
        <button className='bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full'>Add to Cart </button>
      </div>
    </div>
  )
}

export default ProductCard