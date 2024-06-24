import React from 'react';
import aboutImage from '../assets/aboutImage.png';

const About = () => {
  return (
    <section id="aboutSection" className="my-12 md:my-20 py-12 md:py-24">
      <div className="text-center mb-10">
        <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">About</div>
        <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Our commitment to quality service"</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="leading-tight ubuntu-light text-3xl md:text-5xl mb-4 text-gray-800 dark:text-gray-100">
            Our Journey to Excellence in <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">Laptop</span> Repairs
          </div>
          <div className="ubuntu-regular text-gray-700 dark:text-gray-400">
            Welcome to our shop, where our passion for technology meets our dedication to exceptional customer service. Established in [Year], our shop has been a cornerstone in the community for reliable and high-quality laptop repair services. What started as a small endeavor has grown into a trusted hub for all your laptop needs, thanks to our unwavering commitment to excellence.
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5 mt-10 text-xl">
            <div className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr w-10 h-10 rounded-md flex justify-center items-center text-white from-red-400 to-red-600">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr w-10 h-10 rounded-md flex justify-center items-center text-white from-red-400 to-red-600">
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className="cursor-pointer shadow-md shadow-gray-600 bg-gradient-to-tr w-10 h-10 rounded-md flex justify-center items-center text-white from-red-400 to-red-600">
              <i className="fa-brands fa-facebook"></i>
            </div>
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
