import { Button } from "flowbite-react";
import React, { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [pid, setPid] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState(null);

  const onAddProducts = async (e) => {
    e.preventDefault();
    try {
      const body = { image, pid, name, description, price };
      console.log(body);
      const res = await fetch("http://localhost:8080/addproducts", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await res.json();
      console.log(jsonData);
      alert(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleImgChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  // console.log(image);

  const uploadImg = () => {
    if (image === null) {
      alert("NO IMG SELECTED");
      return;
    } else {
      console.log(image.name);

      const imgRef = ref(storage, `/productimgs/${image.name}`);

      uploadBytes(imgRef, image)
        .then(() => {
          getDownloadURL(imgRef)
            .then((url) => {
              setUrl(url);
            })
            .catch((error) => {
              console.log(error.message, "error getting url");
            });
            setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    // console.log(url);
  };

  return (
    <>
      <div className="flex justify-center mt-7">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                image
              </label>
              <div className="flex justify-between items-center">
                <input
                  className=" w-3/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="file"
                  placeholder="Image"
                  onChange={handleImgChange}
                />
                <Button onClick={uploadImg}> Upload </Button>
              </div>
              <p>{url}</p>
            </div>
            <br />

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                pid
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="pid"
                onChange={(e) => setPid(e.target.value)}
                value={pid}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="text"
              >
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
            </div>
            <br />
            <div className="w-full justify-center px-3 mb-6 md:mb-0 ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
                onClick={onAddProducts}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
