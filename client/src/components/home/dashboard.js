import React from "react";
import img1 from "./../../assets/placeholder.png";
import { Carousel } from "flowbite-react";
import About from "../about/About";
import MyCarousel from "./Carousel";

const DashBoard = () => {
  return (
    <>
    <div className="py-0">
      <MyCarousel/>
     
    </div>
    <About/>
    </>
  );
};

export default DashBoard;
