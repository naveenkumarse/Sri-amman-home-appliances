import React, { useEffect, useState } from "react";

const CartCard = ({product}) => {
    const { image, name, description, price, pid,id,quantity} = product;

    const [count, setCount] = useState(1);
    let newprice = 1;
   const  onCountChange = () =>{
        newprice = count*newprice;
    }
    useEffect(()=>{
        onCountChange()
    },[count])
    

    return (
        <>
            <div key={id} className="md:flex items-center py-8 border-t border-gray-200">
                <div className="w-1/4">
                    <img
                        src={`${image}`}
                        alt="product img"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="md:pl-3 md:w-3/4 h-48 flex flex-col  justify-between ">
                    <div className="flex w-full pt-1">
                        <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">
                            {pid}
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                            {name}
                        </p>
                        <div className="flex w-24 justify-between">
                            <div className="border-2 w-1/3 mx-1 border-black">
                                <button onClick={() => setCount(count - 1)} >-</button>
                            </div>
                            <div className="border-2 w-1/3 mx-1 border-black">
                                <p>{count}</p>
                            </div>
                            <div className="border-2	w-1/3 mx-1 border-black">
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div >
                        </div>
                      
                    </div>
                 
                    <p className=" text-xs leading-3 text-gray-600">
                        {description}
                    </p>
                    <div className="flex items-center justify-end pt-5 pr-6">
                        <p className="text-base font-black leading-none text-gray-800">
                            ₹{price}
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CartCard;