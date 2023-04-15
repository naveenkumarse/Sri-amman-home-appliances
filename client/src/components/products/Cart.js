import React from "react";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";

function Cart() {
  const products = JSON.parse(localStorage.getItem("cartdata"));
  var subtotal = 0;
  
  products && products.array.forEach( (e) =>  subtotal += e.productprice );
  
  var total = 75+subtotal;
  
  const minus = (e) => {
    e.count = e.count+1 ;
  }

  const plus = (e) => {
    e.count = e.count-1 ;
  }

  return (
    <>
      <div
        className=" bg-black bg-opacity-50 top-0 -z-20 overflow-x-hidden"
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
              {products ? (
                products.map((e) => {
                  return <div key={e.productid} className="md:flex items-center py-8 border-t border-gray-200">
                  <div className="w-1/4">
                    <img
                      src={e.productimg}
                      alt = "product img"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-3/4 h-48 flex flex-col  justify-between ">
                    <div className="flex w-full pt-1">
                      <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">
                        {e.productid}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800">
                        {e.productname}
                      </p>
                      <div className="flex w-24 justify-between">
                        <div className="border-2 w-1/3 mx-1 border-black">
                          <button onClick={() =>minus(e)} >-</button>
                        </div>
                        <div className="border-2 w-1/3 mx-1 border-black">
                          <p>{e.count}</p>
                        </div>
                        <div className="border-2	w-1/3 mx-1 border-black">
                          <button onClick={() =>plus(e)}>+</button>
                        </div >
                      </div>
                    </div>

                    <p className=" text-xs leading-3 text-gray-600">
                      {e.productdesc}
                    </p>
                    <div className="flex items-center justify-end pt-5 pr-6">
                      <p className="text-base font-black leading-none text-gray-800">
                        ₹{e.productprice}
                      </p>
                    </div>
                  </div>
                </div>
                } 
                
                )
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
                      ₹{total}
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
  );
}

export default Cart;
