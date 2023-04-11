import { Footer } from "flowbite-react";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const MyFooter = () => {
  return (
    <Footer container={true} className="bg-slate-200 mt-32">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-center">
            <div>
              <Footer.Title title="Sri Amman Home Appliances" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Products</Footer.Link>
                <Footer.Link href="#">Delivery</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Dreamimbue" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={AiFillFacebook} />
            <Footer.Icon href="#" icon={AiOutlineWhatsApp} />
            <Footer.Icon href="#" icon={AiOutlineTwitter} />
            <Footer.Icon href="#" icon={AiOutlineInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
