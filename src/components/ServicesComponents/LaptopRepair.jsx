import React from "react";

const LaptopRepair = () => {
  return (
    <div className="dark:text-gray-200">
      <h2 className="text-xl font-bold mb-4">Laptop Repair</h2>
      <div className="mb-4">
        <p>Our experienced technicians can repair any issue with your laptop, from hardware to software problems.</p>
      </div>
      <div className="border dark:border-gray-500 p-4 rounded">
        <h3 className="text-lg font-semibold">Repair Services</h3>
        <ul className="list-disc list-inside">
          <li>Screen Replacement</li>
          <li>Battery Replacement</li>
          <li>Keyboard Repair</li>
          <li>Software Troubleshooting</li>
        </ul>
      </div>
    </div>
  );
};

export default LaptopRepair;
