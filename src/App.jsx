import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx';
import CompanyIcons from './components/CompanyIcons.jsx';


const App = () => {

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const carouselTexts = [
    "Wide range of laptops",
    "Expert laptop repairs",
    "Enhance computing with accessories",
  ];
  const subCarouselTexts = [
    "We offer a wide range of laptops for sale, including the latest models from top brands.",
    "Our experienced technicians can repair any issue with your laptop, from hardware to software problems.",
    "We offer a variety of laptop accessories to enhance your computing experience",
  ];
  return (
    <div className='bg-gray-50 px-2 md:px-20 dark:bg-gray-900'>
      <Navbar />
      <Carousel images={images} texts={carouselTexts} subTexts={subCarouselTexts} />
      <CompanyIcons/>
      <About/>
      <Services/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
