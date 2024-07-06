// import React, { useState } from 'react';
// import logo from '../assets/Designer-removebg-preview.png';
// import { IoLogoWhatsapp } from "react-icons/io5";
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleSetActive = (section) => {
//     setActiveSection(section);
//     setIsMobileMenuOpen(false); // Close the mobile menu when a section is selected
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const whatsAppUrl = `https://wa.me/8582937283?text=Hello,%20I'm%20interested%20in%20your%20service.`;


//   return (
//     <section className="flex justify-between mb-4 py-3 md:py-5 bg-gray-50 border-b border-gray-400 sticky top-0 z-50">
//       <div className='flex items-center gap-1'>
//         <img src={logo} alt="Krishna Infotech Logo" className='w-7 md:w-10' />
//         <div className='font-bold text-gray-700'>
//           <span className='text-2xl text-red-500'>K</span>rishna Infotech
//         </div>
//       </div>
//       <div className="flex md:hidden items-center">
//         <button onClick={toggleMobileMenu} className="text-2xl">
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       <ul className={`md:flex justify-center gap-5 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent`}>
//         {['home', 'about', 'services', 'faq', 'contact'].map(section => (
//           <a key={section} href={`#${section}Section`} onClick={() => handleSetActive(section)}>
//             <li
//               id={section}
//               className={`nav-link px-4 py-2 rounded-md ${activeSection === section ? 'bg-gradient-to-tr from-red-400 to-red-600 text-white' : 'bg-gray-100 text-gray-700'} md:bg-transparent`}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </li>
//           </a>
//         ))}
//       </ul>
//       <div className="hidden md:flex justify-center items-center">
//         <a href={whatsAppUrl} target='_blank' rel='noopener noreferrer' className="text-xl flex rounded-md p-2 gap-2 bg-green-500 cursor-pointer text-gray-100">
//           <IoLogoWhatsapp />
//           <div className="text-sm font-semibold">Whatsapp</div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Navbar;









import React, { useState } from 'react';
import logo from '../assets/Designer-removebg-preview.png';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close the mobile menu when a section is selected
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const countryCode = '91'; // Replace with your country's calling code
  const phoneNumber = '8582937283'; // The phone number without country code
  const whatsAppUrl = `https://wa.me/${countryCode}${phoneNumber}?text=Hello,%20I'm%20interested%20in%20your%20service.`;

  return (
    <section className="flex justify-between mb-4 py-3 md:py-5 bg-gray-50 border-b border-gray-400 sticky top-0 z-50">
      <div className='flex items-center gap-1'>
        <img src={logo} alt="Krishna Infotech Logo" className='w-7 md:w-10' />
        <div className='font-bold text-gray-700'>
          <span className='text-2xl text-red-500'>K</span>rishna Infotech Solution
        </div>
      </div>
      <div className="flex md:hidden items-center">
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`md:flex justify-center gap-5 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent`}>
        {['home', 'about', 'services', 'faq', 'contact'].map(section => (
          <a key={section} href={`#${section}Section`} onClick={() => handleSetActive(section)}>
            <li
              id={section}
              className={`nav-link px-4 py-2 rounded-md ${activeSection === section ? 'bg-gradient-to-tr from-red-400 to-red-600 text-white' : 'bg-gray-100 text-gray-700'} md:bg-transparent`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          </a>
        ))}
      </ul>
      <div className="hidden md:flex justify-center items-center">
        <a href={whatsAppUrl} target='_blank' rel='noopener noreferrer' className="text-xl flex rounded-md p-2 gap-2 bg-green-500 cursor-pointer text-gray-100">
          <IoLogoWhatsapp />
          <div className="text-sm font-semibold">Whatsapp</div>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
