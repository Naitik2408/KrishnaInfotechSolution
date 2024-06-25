import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import img1 from '../assets/laptop sales.png';

const Carousel = ({ images, texts, subTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // const whatsAppUrl = `https://wa.me/8582937283?text=Hello,%20I'm%20interested%20in%20your%20services.`;

  const whatsAppUrl = `https://wa.me/9875306855?text=Hello,%20I'm%20interested%20in%20your%20service.`;

  return (
    <section id="homeSection" className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="min-w-full h-[80vh] box-border relative" key={index}>
            <img src={img1} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute top-0 w-full h-full bg-black bg-opacity-30 flex items-end p-4 md:p-20 pb-12 md:pb-48">
              <div className="text-white w-full md:w-1/2">
                <div className="font-bold text-5xl">{texts[index]}</div>
                <div className="mt-5">{subTexts[index]}</div>
                <div className="flex mt-5 md:mt-6">
                  <a href={whatsAppUrl} target='_blank' rel='noopener noreferrer'  className="text-xl flex rounded-md p-2 gap-2 bg-green-500 cursor-pointer text-gray-100">
                    <IoLogoWhatsapp />
                    <div className="text-sm font-semibold">Contact to explore</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
