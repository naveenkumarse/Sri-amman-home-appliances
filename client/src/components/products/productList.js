import { Link } from "react-router-dom";
import arr from "../data/data";


const ProductList = () => {
  
  return (
    <div className="grid grid-cols-3 mx-20">
      {arr.map((e) => (
        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          key={e.productid}
        >
          <a href="#">
            <img
              className="mx-auto my-3 rounded-t-lg"
              src={e.productimg}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                {e.productname}
              </h5>
            </a>
            <div className="flex items-center justify-between mt-9">
              <span className="text-3xl font-bold text-gray-900 ">
                {e.productprice}
              </span>

              <Link
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                to={`/description/${e.productid}`} 
              >
                {" "}
                View{" "}
              </Link>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ProductList;


