import React from "react";
import { useParams } from "react-router-dom";
import arr from "../data/data";


export default function Description() {

  const productid = useParams();
  const addCart = (product) => {
    product["count"] = 1;
    if (localStorage.getItem("cartdata")) {
      var appendProduct = JSON.parse(localStorage.getItem("cartdata"));
      var count = appendProduct.filter((e) => e.productid === product.productid);
      // console.log(  );
      if (count.length === 1) {
        alert("Already in cart");
      } else {
        appendProduct.push(product);
        localStorage.setItem("cartdata", JSON.stringify(appendProduct));
      }
      // appendProduct.map((e) => {
      //   if (e.productid === product.productid) {
      //   } else {
      //   }
      // });
    } else {
      var arr = [];
      arr.push(product);
      localStorage.setItem("cartdata", JSON.stringify(arr));
    }

  };
  return (
    <>
      {arr
        .filter((e) => e.productid === productid["param"])
        .map((e) => {
          return (
            <section
              className="text-gray-700 body-font overflow-hidden bg-white"
              key={e.productid}
            >
              <div className="container px-5 py-22 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    src={e.productimg}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {e.productname}
                    </h1>
                    <p className="leading-relaxed">{e.productdesc}</p>

                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ₹ {e.productprice}
                      </span>
                      <button
                        onClick={() => addCart(e)}
                        className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" >

                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      
    </>
  );
}



