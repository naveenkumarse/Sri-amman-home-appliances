import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import CartCard from "./CartCard";
import NavBar from "../navbar/Navbar";

// function Cart() {

//   var subtotal = 0;

//   products && products.map((e) => {
//     subtotal += e.productprice;
//   });

//   var total = 75 + subtotal;

//   const minus = (e) => {
//     e.count = e.count + 1;
//   }

//   const plus = (e) => {
//     e.count = e.count - 1;
//   }

//   return (
//     <>

//     </>
//   );
// }

// export default Cart;


const MyCart = () => {
  const [mycart,setMyCart] = useState([])
  const [subtotal,setSubtotal] =useState(0)
  const [total,setTotal] = useState(0) 

  const onListCart = async () => {
   
    try {
      const response = await fetch("http://localhost:8080/mycart");
      console.log(response);
      if (response) {
        const res = await response.json();
        console.log(res);
        setMyCart(res);
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    onListCart()
    UpdateTotal()
  }, []);

  const UpdateTotal = () =>{
    mycart.map((e)=>{
      setSubtotal(subtotal+e.price);
    })

     setTotal(total + subtotal + 35 + 35);
  }

 

    

  return (
    <>
      <div
        className="w-full h-full bg-black bg-opacity-50 top-0 overflow-y-auto overflow-x-hidden "
        id="chec-div"
      >
        <div
          className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className="lg:w-3/4 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <p className="text-5xl font-black leading-10 text-gray-800 pt-3 mb-20">
                Your Cart
              </p>
              {mycart ? (
                mycart.map((product) => (
                  <CartCard key={product.id} product={product} />
                ))
              ) : (
                <div> No Items In Cart </div>
              )}
            </div>
            <div className="xl:w-1/4 md:w-1/3 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      ₹{subtotal}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Delivery
                    </p>
                    <p className="text-base leading-none text-gray-800">₹30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">₹35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      ₹{ subtotal + 35 +35}
                    </p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default MyCart;