import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../assets/7578341.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
      import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
      templateParams,
      import.meta.env.VITE_USER_ID // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response, response.status, response.text);
      alert('Message sent successfully!');
      formRef.current.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again.');
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section id='contactSection' className="md:my-20 md:py-24 py-12">
      <div className="text-center mb-10">
        <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Contact</div>
        <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Get in Touch with Us"</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-[50%] mx-auto mt-10 p-6 rounded-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder='krishna'
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder='krishnaInfo@gmail.com'
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone No</label>
              <input
                type="text"
                name="phone"
                placeholder='(+91) 8582937283'
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder='regarding availability of macbook'
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                placeholder='Does the latest MacBook model, MacBook Pro with the M3, M3 Pro, or M3 Max chip are available in 14-inch or 16-inch options?'
                value={formData.message}
                onChange={handleChange}
                className="mt-1 min-h-40 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`px-4 py-2 bg-gradient-to-tr from-red-400 to-red-600 text-white rounded-md hover:bg-red-700 ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center mt-10 md:mt-0">
          <img src={contactImg} alt="Contact us" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
