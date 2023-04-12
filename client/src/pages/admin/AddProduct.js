import React, { useState } from "react";

const AddProduct = () => {

    const [image,setImage] = useState('');
    const [pid,setPid] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);

    const onAddProducts = async (e) => {
        e.preventDefault();
        try {
            const body = { image,pid,name,description,price };
            console.log(body);
            const res = await fetch("http://localhost:8080/addproducts", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            console.log(jsonData)
            alert(jsonData)
            
        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <>
            <div class="flex  justify-center mt-7">
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                image
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Image" onChange={(e) => setImage(e.target.value)} value={image} />
                        </div>
                        <br />

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
                                pid
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="pid" onChange={(e) => setPid(e.target.value)} value={pid} />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
                                Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
                                Description
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Price
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="w-full justify-center px-3 mb-6 md:mb-0 ">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button" onClick={onAddProducts}>
                                Add
                            </button>

                        </div>


                    </form>
                 
                </div>
            </div>

        </>
    )
}

export default AddProduct;