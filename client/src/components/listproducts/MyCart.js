import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { addToOrder, listMyCart, placeOrder } from "../../api";

const MyCart = () => {
  const [mycart,setMyCart] = useState([])
  
  const subtotal = mycart.reduce((acc, cur) => acc + cur.price*cur.quantity, 0)
  
  console.log(mycart)
  const uid = localStorage.getItem("uid")
  const body = {uid};
  useEffect(() => {
    listMyCart(setMyCart,body)
  }, []);
  // const getMyOrders = (val) =>{
  //     console.log(val);
  //     const {image,uid,pid,name,description,newprice:price,placeOrder,count:quantity} = val;
  //     pay(body)
  // }

 const pay = () => {
  let tdate = new Date()
let day = tdate.getDate();
let month = tdate.getMonth()+1;
let year = tdate.getFullYear();

let date = `${day}.${month}.${year}.`;
let total = subtotal;
const body = {date,uid,total}
 console.log(body);
addToOrder(body);
  alert("Paid SuccessFully and Order Placed");
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
                  <CartCard key={product.id} product={product}  /> //getMyOrders={getMyOrders}
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
                  
                
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      ₹{ subtotal }
                    </p>
                  </div>
                  <button onClick={pay} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    Buy
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