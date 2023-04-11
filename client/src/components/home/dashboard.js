import React from "react";
import img1 from "./../../assets/placeholder.png";
import { Carousel } from "flowbite-react";
import About from "../about/About";

const DashBoard = () => {
  return (
    <>
    <div className="flex mt-20 items-center justify-evenly">
      <div className="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet
        dolorem modi, ad minima nostrum aut animi praesentium delectus labore,
        molestias ea rerum tenetur iusto expedita corrupti maxime consequatur
        libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        eveniet dolorem modi, ad minima nostrum aut animi praesentium delectus
        labore, molestias ea rerum tenetur iusto expedita corrupti maxime
        consequatur libero.
      </div>
      <div className="h-56 w-1/3 sm:h-64 xl:h-80 2xl:h-96 shadow-2xl">
        <Carousel>
          <img
            className=" object-cover w-full h-full"
            src={img1}
            alt="Slider img"
          />
          <img
            className=" object-cover w-full h-full"
            src={img1}
            alt="Slider img"
          />
          <img
            className=" object-cover w-full h-full"
            src={img1}
            alt="Slider img"
          />
          <img
            className=" object-cover w-full h-full"
            src={img1}
            alt="Slider img"
          />
          <img
            className=" object-cover w-full h-full"
            src={img1}
            alt="Slider img"
          />
        </Carousel>
      </div>
     
    </div>
    <About/>
    </>
  );
};

export default DashBoard;
