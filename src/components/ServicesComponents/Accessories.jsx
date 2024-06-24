// src/Accessories.js

import React from "react";
import keyboardImg from '../../assets/stefen-tan-KYw1eUx1J7Y-unsplash.jpg'
import headPhoneImg from '../../assets/luke-peterson-lUMj2Zv5HUE-unsplash.jpg'
import chargerImg from '../../assets/homemade-media-6l5z2EPrnFc-unsplash.jpg'
import { IoLogoWhatsapp } from "react-icons/io5";

const Accessories = () => {
  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-bold mb-4">Accessories</h2>
      <div className="mb-4">
        {/* <p>We offer a variety of laptop accessories to enhance your computing experience.</p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold">Keyboard</h3>
          {/* <p>High precision mice for all your needs.</p> */}
          <div className="w-full h-48 overflow-hidden rounded-md"><img src={keyboardImg} className="w-full h-full object-cover" alt="" /></div>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold">Headphones</h3>
          {/* <p>High-quality sound for work and play.</p> */}
          <div className="w-full h-48 overflow-hidden rounded-md"><img src={headPhoneImg} className="w-full h-full object-cover" alt="" /></div>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold">Cable</h3>
          {/* <p>Comfortable and ergonomic keyboards.</p> */}
          <div className="w-full h-48 overflow-hidden rounded-md"><img src={chargerImg} className="w-full h-full object-cover" alt="" /></div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-4">
        <div className="text-xl flex rounded-md p-2 gap-2 bg-green-500 cursor-pointer  text-gray-100">
          <IoLogoWhatsapp/>
          <div className="text-sm font-semibold">Contact for more</div>
          </div>
      </div> */}
    </div>
  );
};

export default Accessories;
