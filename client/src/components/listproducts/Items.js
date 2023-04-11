import React, { useState } from 'react'
import ProductCard from './ProductCard';
const product = [
  {
    id: 1,
    image: '1',
    name: 'Godrej',
    description: 'Godrej 236 L 2 Star Inverter Frost-Free Double Door Refrigerator (RF EON 236B 25 HI SC DR)',
    price: 20000
  },
  {
    id: 2,
    image: '2',
    name: 'AmazonBasics',
    description: 'AmazonBasics 305 L 3 star Double Door Refrigerator (Silver, Automatic humidity control)',
    price: 18000
  },
  {
    id: 3,
    image: '3',
    name: 'Whirpool',
    description: 'Whirlpool Neo DF278 Prm Arctic Steel Frost-Free Double Door 265L Refrigerator',
    price: 21000
  },
  {
    id: 4,
    image: '4',
    name: 'Haier',
    description: 'Haier 276 Litres 3 Star Frost Free Inverter Double Door Refrigerator ( HRB-2964PSG-E)',
    price: 16000
  },
  {
    id: 5,
    image: '5',
    name: 'LG',
    description: 'LG GL-T382VPZX 360 L 3 StarWi-Fi Double Door Refrigerator (Shiny Steel,  Door Cooling+)',
    price: 23000
  },
  {
    id: 6,
    image: '6',
    name: 'Samsung',
    description: 'Samsung RR24T287YCR/NL 230L 3 Star Inverter Direct-Cool Refrigerator',
    price: 25000
  }

]


const Items = () => {

  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
      {
        product.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </section>
  )
}

export default Items