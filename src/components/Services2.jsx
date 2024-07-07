import React from 'react'
import { FaApple } from "react-icons/fa6";
import { SiAcer } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiLenovo } from "react-icons/si";


import { SlScreenDesktop } from "react-icons/sl";
import { IoBatteryHalf } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";


import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdCable } from "react-icons/md";

import accessories from '../assets/homemade-media-6l5z2EPrnFc-unsplash.jpg'
import repair from '../assets/nikolai-chernichenko-s6uS36SF91Y-unsplash.jpg'
import sales from '../assets/erick-cerritos-i5UV2HpITYA-unsplash.jpg'

function Services2() {
    return (
        <section id="servicesSection" className="py-12 md:py-24 my-12 md:my-20">
            <div className="text-center mb-10">
                <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Services</div>
                <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Comprehensive Solutions Tailored for You"</div>
            </div>
            <div className='flex flex-col gap-12'>

                <div>
                    <div>
                        <div className='font-bold text-5xl text-gray-900'>Purchase a Laptop</div>
                        <div className='font-semibold text-gray-600 w-96 mt-2'>Discover the latest models and top brands for performance and reliability</div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='w-[70%] flex flex-col gap-4'>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><FaApple /></div>
                                <div className='text-xl font-semibold'>MacBook</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><SiAcer /></div>
                                <div className='text-xl font-semibold'>Acer</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><SiIntel /></div>
                                <div className='text-xl font-semibold'>Intel</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><SiDell /></div>
                                <div className='text-xl font-semibold'>Dell</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><SiLenovo /></div>
                                <div className='text-xl font-semibold'>Lanovo</div>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='flex justify-center'>
                                <div className='w-64 h-64 overflow-hidden rounded-lg shadow-md shadow-gray-700'>
                                    <img src={sales} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className='border border-red-500 w-fit px-20 py-1 rounded-full text-red-500 '>Contact us</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className='font-bold text-5xl text-gray-900'>Laptop Repairs</div>
                        <div className='font-semibold text-gray-600 w-96 mt-2'>Our experienced technicians can repair any issue with your laptop, from hardware to software problems.</div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='w-[70%] flex flex-col gap-4'>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><SlScreenDesktop /></div>
                                <div className='text-xl font-semibold'>creen Replacement</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><IoBatteryHalf /></div>
                                <div className='text-xl font-semibold'>Battery Replacement</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><FaRegKeyboard /></div>
                                <div className='text-xl font-semibold'>Keyboard Repair</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><GrCloudSoftware /></div>
                                <div className='text-xl font-semibold'>Software Troubleshooting</div>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='flex justify-center'>
                                <div className='w-64 h-64 overflow-hidden rounded-lg shadow-md shadow-gray-700'>
                                    <img src={repair} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className='border border-red-500 w-fit px-20 py-1 rounded-full text-red-500 '>Contact us</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        <div className='font-bold text-5xl text-gray-900'>Purchase Accessories</div>
                        <div className='font-semibold text-gray-600 w-96 mt-2'>Find essential accessories to enhance your laptop experience and productivity.</div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div className='w-[70%] flex flex-col gap-4'>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><FaHeadphonesSimple /></div>
                                <div className='text-xl font-semibold'>Headphones</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><MdCable /></div>
                                <div className='text-xl font-semibold'>Cable</div>
                            </div>
                            <div className='flex gap-5 items-center text-4xl bg-gray-100 p-2 rounded-lg'>
                                <div><FaRegKeyboard /></div>
                                <div className='text-xl font-semibold'>Keyboard</div>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='flex justify-center'>
                                <div className='w-64 h-64 overflow-hidden rounded-lg shadow-md shadow-gray-700'>
                                    <img src={accessories} alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className='border border-red-500 w-fit px-20 py-1 rounded-full text-red-500 '>Contact us</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Services2
