// src/LaptopSales.js

import React from "react";
import dellImg from '../../assets/dell-e59Y6vqbL7Y-unsplash.jpg'
import acer from '../../assets/jonathan-francisca-Y9FvnY7FU1A-unsplash.jpg'
import apple from '../../assets/jeroen-den-otter-AYMILInhRTI-unsplash.jpg'

const LaptopSales = () => {
  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-bold mb-4">Laptop Sales</h2>
      <div className="mb-4">
        {/* <p>We offer a wide range of laptops for sale, including the latest models from top brands.</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <div className="w-full h-80 overflow-hidden rounded-md relative">
            <img src={dellImg} className="w-full h-full object-cover" alt="" />
            <div className="text-3xl absolute top-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-red-400/10 to-red-600/80">
              <div className="w-[60%] font-semibold text-gray-50 text-center">"Experience Innovation with <span className="underline">Dell Laptops</span> "</div>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded">
          <div className="w-full h-80 overflow-hidden rounded-md relative">
            <img src={acer} className="w-full h-full object-cover" alt="" />
            <div className="text-3xl absolute top-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-red-400/10 to-red-600/80">
              <div className="w-[60%] font-semibold text-gray-50 text-center">"Experience Innovation with <span className="underline">Mac Laptops</span> "</div>
            </div>
            </div>
        </div>
        <div className="border p-4 rounded">
          <div className="w-full h-80 overflow-hidden rounded-md relative">
            <img src={apple} className="w-full h-full object-cover" alt="" />
            <div className="text-3xl absolute top-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-red-400/10 to-red-600/80">
              <div className="w-[60%] font-semibold text-gray-50 text-center">"Experience Innovation with <span className="underline">Acer Laptops</span> "</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSales;
