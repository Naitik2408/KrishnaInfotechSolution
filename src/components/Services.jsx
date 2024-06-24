import React, { useState } from "react";
import LaptopSales from "./ServicesComponents/LaptopSales";
import LaptopRepair from "./ServicesComponents/LaptopRepair";
import Accessories from "./ServicesComponents/Accessories";

const Services = () => {
  const [activeSection, setActiveSection] = useState("sales");

  const renderContent = () => {
    switch (activeSection) {
      case "repair":
        return <LaptopRepair />;
      case "accessories":
        return <Accessories />;
      case "sales":
      default:
        return <LaptopSales />;
    }
  };

  const whatsAppUrl = `https://wa.me/9060557296?text=Hello,%20I'm%20interested%20in%20your%20services.`;

  return (
    <section id="servicesSection" className="py-12 md:py-24 my-12 md:my-20">
      <div className="text-center mb-10">
        <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Services</div>
        <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Our commitment to quality service"</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex mb-5 space-x-2 shadow-md shadow-gray-400 p-2 rounded-md">
          <div
            className={`px-3 py-2 cursor-pointer rounded-md ${activeSection === "sales" ? "bg-gradient-to-tr from-red-400 to-red-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
            onClick={() => setActiveSection("sales")}
          >
            Laptop Sales
          </div>
          <div
            className={`px-3 py-2 cursor-pointer rounded-md ${activeSection === "repair" ? "bg-gradient-to-tr from-red-400 to-red-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
            onClick={() => setActiveSection("repair")}
          >
            Laptop Repair
          </div>
          <div
            className={`px-3 py-2 cursor-pointer rounded-md ${activeSection === "accessories" ? "bg-gradient-to-tr from-red-400 to-red-600 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}`}
            onClick={() => setActiveSection("accessories")}
          >
            Accessories
          </div>
        </div>
      </div>
      <div className="p-2 md:p-5 md:border rounded bg-gray-50">
        <div>{renderContent()}</div>
        

      </div>
    </section>
  );
};

export default Services;
