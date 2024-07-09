import React from 'react'
import { LiaSlideshare } from "react-icons/lia";

function RentalLaptop() {
    return (
        <section className="my-12 md:my-20 py-12 md:py-20 md:px-32 px-5 bg-red-600 text-center">
            <div className='flex items-center justify-center gap-5 text-4xl mb-6'>
                <div className='p-3 bg-white rounded-full'><LiaSlideshare /></div>
                <div className='text-2xl font-extrabold text-white'>Laptop Rental</div>
            </div>
            <div className='text-gray-200 md:font-semibold'>At <span className='underline font-semibold'>Krishna Infotech Solution</span>, we believe in making technology accessible and hassle-free. Whether you're a student, professional, or business, our laptop rental service offers the latest models to suit your needs without the long-term commitment. Experience the flexibility, affordability, and convenience of renting high-performance laptops for your projects, events, or everyday tasks. Let us power your journey with reliable tech solutions, tailored just for you.</div>
        </section>
    )
}

export default RentalLaptop
