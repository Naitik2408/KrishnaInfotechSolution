import React from 'react';
import logo from '../assets/Designer-removebg-preview.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 px-2 md:px-20">
      <div className="md:flex justify-between border-t-gray-400 border-t-[1px] py-10 text-center md:text-start gap-8 px-4">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src={logo} alt="Logo" className="w-10" />
            <div className="font-bold text-gray-700 dark:text-gray-200 underline">
              <span className="text-2xl text-red-500">K</span>rishna Infotech Solution
            </div>
          </div>
          <div className="w-full md:w-80 mt-5 text-gray-800 dark:text-gray-300 mx-auto md:mx-0">
            Address - Entrance from, 1st floor, 1 Acharya Jagadish Chandra Bose Road, Lord Sinha Road, Kolkata, West Bengal 700020
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="ubuntu-bold mb-4 text-gray-800 dark:text-gray-200">Company</div>
          <ul className="ubuntu-regular text-gray-600 dark:text-gray-400 text-sm flex flex-col gap-2">
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"><a href="#homeSection">Home</a></li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"><a href="#aboutSection">About</a></li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"><a href="#servicesSection">Services</a></li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"><a href="#faqSection">Faq</a></li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"><a href="#contactSection">Contact</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="ubuntu-bold mb-4 text-gray-800 dark:text-gray-200">Services</div>
          <ul className="ubuntu-regular text-gray-600 dark:text-gray-400 text-sm flex flex-col gap-2">
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">Help Center</li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">Private Policy</li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">Terms and Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="ubuntu-bold mb-4 text-gray-800 dark:text-gray-200">Follow Us</div>
          <div className="flex gap-5">
            <a href='https://www.instagram.com/kolkata_laptops?igsh=MXBmOGxzNDU2anE2cA==' target="_blank" rel="noopener noreferrer" className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr from-red-400 to-red-600 w-10 h-10 rounded-md flex justify-center items-center text-white">
            <FaInstagram/>
            </a>
            <a href='https://www.facebook.com/refurbishedlaptopkolkata' target="_blank" rel="noopener noreferrer" className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr from-red-400 to-red-600 w-10 h-10 rounded-md flex justify-center items-center text-white">
            <FaFacebook/>
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-gray-600 border-t'>Created By - Naitik Kumar</div>
    </section>
  );
}

export default Footer;
