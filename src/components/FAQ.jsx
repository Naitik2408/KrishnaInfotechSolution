import React, { useState, useRef } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqSection" className="md:my-20 md:py-24 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-800 mb-10">
          <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Frequently Asked Questions</div>
          <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Your Questions, Our Answers"</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full md:w-3/4">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-200 rounded-lg ">
                <button
                  className="w-full text-left ubuntu-bold text-xl px-4 py-2 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex items-center">
                    {openIndex === index ? <CiCircleMinus className="mr-2" /> : <CiCirclePlus className="mr-2" />}
                    {faq.question}
                  </span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: openIndex === index ? `${contentRefs.current[index].scrollHeight}px` : '0',
                    transition: 'max-height 0.3s ease-out',
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 shadow-md rounded-lg text-gray-700 pl-12">
                    <div className=' border-l border-l-gray-700 pl-3'>{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What are your operating hours?",
    answer: "We are open from 9 AM to 6 PM, Monday to Saturday. We are closed on Sundays and public holidays.",
  },
  {
    question: "Do you offer a warranty on your repairs?",
    answer: "Yes, we offer a 90-day warranty on all our repairs. If you experience any issues with our service within this period, please contact us for a free follow-up repair.",
  },
  {
    question: "Can I get a quote for my laptop repair before I bring it in?",
    answer: "Absolutely! You can contact us with the details of your laptop issue, and we'll provide you with an estimated quote. However, please note that the final quote may vary after a thorough inspection.",
  },
  {
    question: "Do you sell refurbished laptops?",
    answer: "Yes, we do. Our refurbished laptops are thoroughly tested and come with a warranty. Visit our store or contact us for the latest availability and pricing.",
  },
  {
    question: "How long does a typical laptop repair take?",
    answer: "The repair time varies depending on the issue. Most repairs are completed within 24-48 hours. For more complex problems, it might take longer. We strive to provide the fastest turnaround time possible without compromising on quality.",
  },
];

export default FAQ;
