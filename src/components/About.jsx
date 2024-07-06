import React from 'react';
import aboutImage from '../assets/aboutImage.png';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

const About = () => {
  const countryCode = '91'; // Replace with your country's calling code
  const phoneNumber = '8582937283'; // The phone number without country code
  const whatsAppUrl = `https://wa.me/${countryCode}${phoneNumber}?text=Hello,%20I'm%20interested%20in%20your%20services.`;

  return (
    <section id="aboutSection" className="my-12 md:my-20 py-12 md:py-24">
      <div className="text-center mb-10">
        <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">About</div>
        <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Our commitment to quality service"</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="leading-tight text-3xl md:text-5xl mb-4 text-gray-800 dark:text-gray-100 font-bold">
            Our Journey to Excellence in <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">Laptop</span> Repairs
          </div>
          <div className="ubuntu-regular font-semibold text-gray-600">
            Welcome to our shop, where our passion for technology meets our dedication to exceptional customer service. Established in 2020, our shop has been a cornerstone in the community for reliable and high-quality laptop repair services. What started as a small endeavor has grown into a trusted hub for all your laptop needs, thanks to our unwavering commitment to excellence.
          </div>
          {/* <div className="p-3 justify-between bg-red-200 rounded-md border border-red-600 flex items-center mt-5">
            <div className="flex items-center gap-5">
              <div className="bg-red-600 text-gray-50 w-fit p-2 rounded-full"><FaLightbulb /></div>
              <div>Comprehensive Computer and Laptop Rentals with Technical Support</div>
            </div>
            <div className="flex justify-center items-center">
              <a href={whatsAppUrl} target='_blank' rel='noopener noreferrer' className="text-xl flex rounded-md p-2 gap-2 bg-green-500 cursor-pointer text-gray-100">
                <IoLogoWhatsapp />
              </a>
            </div>
          </div> */}
          <div className="flex justify-center md:justify-start items-center gap-5 mt-10 text-xl">
            <a href='https://www.instagram.com/kolkata_laptops?igsh=MXBmOGxzNDU2anE2cA==' target="_blank" rel="noopener noreferrer" className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr w-10 h-10 rounded-md flex justify-center items-center text-white from-red-400 to-red-600">
              <FaInstagram/>
            </a>
            <a href='https://www.facebook.com/refurbishedlaptopkolkata' target="_blank" rel="noopener noreferrer" className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr w-10 h-10 rounded-md flex justify-center items-center text-white from-red-400 to-red-600">
              <FaFacebook/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-10 md:mt-0 hidden md:block">
          <img src={aboutImage} alt="About Us" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
