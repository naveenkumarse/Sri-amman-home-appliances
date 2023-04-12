import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

// const products = [
//   {
//     id: 1,
//     image: '1',
//     pid: 1,
//     name: 'Godrej',
//     description: 'Godrej 236 L 2 Star Inverter Frost-Free Double Door Refrigerator (RF EON 236B 25 HI SC DR)',
//     price: 20000
//   },
//   {
//     id: 2,
//     image: '2',
//     pid: 1,
//     name: 'AmazonBasics',
//     description: 'AmazonBasics 305 L 3 star Double Door Refrigerator (Silver, Automatic humidity control)',
//     price: 18000
//   },
//   {
//     id: 3,
//     image: '3',
//     pid: 1,
//     name: 'Whirpool',
//     description: 'Whirlpool Neo DF278 Prm Arctic Steel Frost-Free Double Door 265L Refrigerator',
//     price: 21000
//   },
//   {
//     id: 4,
//     image: '4',
//     pid: 1,
//     name: 'Haier',
//     description: 'Haier 276 Litres 3 Star Frost Free Inverter Double Door Refrigerator ( HRB-2964PSG-E)',
//     price: 16000
//   },
//   {
//     id: 5,
//     image: '5',
//     pid: 1,
//     name: 'LG',
//     description: 'LG GL-T382VPZX 360 L 3 StarWi-Fi Double Door Refrigerator (Shiny Steel,  Door Cooling+)',
//     price: 23000
//   },
//   {
//     id: 6,
//     image: '6',
//     pid: 1,
//     name: 'Samsung',
//     description: 'Samsung RR24T287YCR/NL 230L 3 Star Inverter Direct-Cool Refrigerator',
//     price: 25000
//   },
//   {
//     id: 7,
//     image: '7',
//     pid: 2,
//     name: 'Bosch',
//     description: 'Bosch 7.5 Kg 5 Star Fully Automatic Top Load Washing Machine WOE753M0IN (Maroon)',
//     price: 18000
//   },
//   {
//     id: 8,
//     image: '8',
//     pid: 2,
//     name: 'Whirlpool',
//     description: 'Whirlpool 7 kg Fully Automatic 5 Star, Hard Water wash,(WHITEMAGIC ELITE 7.0 GREY 10YMW)',
//     price: 19000
//   },
//   {
//     id: 9,
//     image: '9',
//     pid: 2,
//     name: 'Panasonic',
//     description: 'Panasonic 8Kg Fully-Automatic Front Loading Washing Machine (Na-128Xb1w01, White)',
//     price: 15000
//   },
//   {
//     id: 10,
//     image: '10',
//     pid: 2,
//     name: 'Rohinhood',
//     description: 'Panasonic 8Kg Fully-Automatic Front Loading Washing Machine (Na-128Xb1w01, White)',
//     price: 20000
//   },
//   {
//     id: 11,
//     image: '11',
//     pid: 2,
//     name: 'LG',
//     description: 'LG 10.0 Kg Inverter Wi-Fi Fully-Automatic Top Loading Machine (THD10SWP,Stainless Steel)',
//     price: 22000
//   },
//   {
//     id: 12,
//     image: '12',
//     pid: 2,
//     name: 'Samsung',
//     description: 'Samsung WW60R20EKMW/TL 6Kg Front Loading Washing Machine',
//     price: 26000
//   },
//   {
//     id: 13,
//     image: '13',
//     pid: 3,
//     name: 'Maharaja',
//     description: 'Ultramax HD Black 1000W Mixer Grinder Online (Maharaja Whiteline)',
//     price: 4500
//   },
//   {
//     id: 14,
//     image: '14',
//     pid: 3,
//     name: 'Preethi',
//     description: 'Preethi 150W Wet Grinder, Purple Color (1 Year Warrenty)',
//     price: 5000
//   },
//   {
//     id: 15,
//     image: '15',
//     pid: 3,
//     name: 'Prestige',
//     description: 'Prestige Delight Mixer Grinder 750 W (With 3 Stainless Steel Jars)',
//     price: 4000
//   }

// ]


const Filters = () => {
  const [pid, setPid] = useState(1);
  const [products, setProducts] = useState([]);


  const onListProducts = async () => {
   
    try {
      const response = await fetch("http://localhost:8080/listproducts");
      console.log(response);
      if (response) {
        const res = await response.json();
        console.log(res);
        setProducts(res);
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    onListProducts()
  }, []);


  return (
    <>
      <section className="my-10 py-3 w-2/3 md:w-4/6 mx-auto flex flex-col md:flex-row justify-center">
        <button className="btnStyle bg-black text-bblue" onClick={() => setPid(1)}>Refrigerator</button>
        <button className="btnStyle  bg-black text-bblue" onClick={() => setPid(2)}> Washing Machine</button >
        <button className="btnStyle bg-black text-bblue" onClick={() => setPid(3)}>Grinder</button>
      </section>
      <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
          products.filter(product => product.pid == pid).map((filterproduct) => {
            return <ProductCard key={filterproduct.id} product={filterproduct} />
          })
        }
      </section >
    </>
  );


}

export default Filters