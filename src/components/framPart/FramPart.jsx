import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";

// import React, { useRef, useState } from 'react';
// Import Swiper React components

const FramPart = () => {
  return (
    <div>
      <div className=" max-w-[1200px] mx-auto md:grid md:grid-cols-3 lg:grid-cols-6 pt-20 place-items-center hidden">
        <img
          src="https://static.ajkerdeal.com/images/muslim-fashion/logo.png"
          alt=""
        />
        <img src={frame2} alt="" />
        <img src={frame3} alt="" />
        <img src={frame4} alt="" />
        <img src={frame5} alt="" />
        <img src={frame6} alt="" />
      </div>
      <div className="bg-white shadow-md p-5  lg:w-[1000px] mx-auto my-10 hidden md:block ">
        <h2 className="text-xl font-bold text-[#5e5d5d]">
          Online Shopping in BD: Buy Fashion, Electronics & Gadgets at Best
          Price | Gawsia Shop
        </h2>
        <p className="text-sm text-[#757575]">
          Online Shopping BD: gawsiashop.com is the largest online shopping
          marketplace in Bangladesh; this B2C online marketplace has been
          launched in September, 2011 in BD. All through the most recent eight
          years, Gawsia Shop has been experimenting with and out to win the trust
          of Bangladeshi customers who shop online and now it is the most famous
          online shopping portal in Bangladesh for both online sellers and
          buyers. [show more...]
        </p>
      </div>
    </div>
  );
};

export default FramPart;
