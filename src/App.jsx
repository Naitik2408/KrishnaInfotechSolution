import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx';
import CompanyIcons from './components/CompanyIcons.jsx';
import LatestProducts from './components/LatestProducts.jsx';
import Services2 from './components/Services2.jsx';
import RentalLaptop from './components/RentalLaptop.jsx';


const App = () => {

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  // const carouselTexts = [
  //   "Wide range of laptops",
  //   "Expert laptop repairs",
  //   "Enhance computing with accessories",
  // ];
  // const subCarouselTexts = [
  //   "We offer a wide range of laptops for sale, including the latest models from top brands.",
  //   "Our experienced technicians can repair any issue with your laptop, from hardware to software problems.",
  //   "We offer a variety of laptop accessories to enhance your computing experience",
  // ];


  const carouselTexts = [
    "Our Laptop Start Just From 9999",
    "Deal In Top Quality Of Renewed And Used Laptop",
    "Expert Laptop Repairs, Enhance Computing With Accessories",
  ];


  const subCarouselTexts = [
    "We offer a wide range of laptops for sale, including the latest models from top brands.",
    "We offer a variety of laptop accessories to enhance your computing experience",
    "Our experienced technicians can repair any issue with your laptop, from hardware to software problems.",
  ];


  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='px-2 md:px-20'><Navbar /></div>
      <div className='px-2 md:px-20'><Carousel images={images} texts={carouselTexts} subTexts={subCarouselTexts} /></div>
      <div className='px-2 md:px-20'><CompanyIcons /></div>
      <div className='px-2 md:px-20'><About /></div>
      <div><RentalLaptop /></div>
      <div className='px-2 md:px-20'><LatestProducts /></div>
      {/* <div className='px-2 md:px-20'><Services /></div> */}
      <div className='px-2 md:px-20'><Services2 /></div>
      <div className='px-2 md:px-20'><FAQ /></div>
      <div className='px-2 md:px-20'><Contact /></div>
      <div><Footer /></div>
    </div>
  );
};

export default App;
