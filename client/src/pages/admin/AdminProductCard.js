import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput, Textarea } from "flowbite-react";

const AdminProductCard = ({ product }) => {
  const { image, name, description, price } = product;
  
  const  Uname = product.name  ;
  const  Udescription  =  product.description ;
  const  Uprice  =  product.price ;
  const pid = product._id ;

  console.log(Udescription);
  console.log(Uname);
  console.log(Uprice);
  
  const deleteProduct = () => {

    // delete with pid
  };

  const [modelShow, updateModelShow] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 duration-100">
      <div className="w-full h-72">
        <img
          src={require(`../../assets/products/${image}.jpg`)}
          alt={`${image}`}
          className="w-full h-full object-contain	"
        />
      </div>
      <div className="flex flex-col items-center my-2 py-2">
        <span className="font-body text-slate-500 block font-bold text-xl">
          {name}
        </span>
        <center>
          <span className="font-body text-slate-500 block my-3">
            {description}
          </span>
        </center>
        <span className="font-body text-slate-500">₹{price}</span>
        <div className="flex justify-between w-1/2">
          <button
            className="bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full"
            onClick={() => {
              updateModelShow(!modelShow);
            }}
          >
            Update{" "}
          </button>
          <button
            className="bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full"
            onClick={deleteProduct}
          >
            Delete{" "}
          </button>

          <React.Fragment>
            <Modal
              show={modelShow}
              size="lg"
              popup={true}
              onClose={() => {
                updateModelShow(!modelShow);
              }}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Update Product
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Product Name" />
                    </div>
                    <TextInput
                      type="text"
                      id="email"
                      placeholder={Uname}
                      required={true}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Product Price" />
                    </div>
                    <TextInput
                      type="text"
                      id="price"
                      placeholder={Uprice}
                      required={true}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="text" value="Description" />
                    </div>
                    <Textarea id="desc" type="text" required={true} placeholder= {Udescription} />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button >Update</Button>
                  </div>
                  
                </div>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
