import React from 'react'
import { LiaSlideshare } from "react-icons/lia";

function RentalLaptop() {
    return (
        <section className="my-12 md:my-20 py-12 md:py-20 px-32 bg-red-600 text-center">
            <div className='flex items-center justify-center gap-5 text-4xl mb-6'>
                <div className='p-3 bg-white rounded-full'><LiaSlideshare /></div>
                <div className='text-2xl font-extrabold text-white'>Laptop Rental</div>
            </div>
            <div className='text-gray-200 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat ratione ea laborum, eaque natus ad omnis, sapiente praesentium perferendis earum repellat eum, sint laboriosam deserunt facere? Dolorum, nostrum labore!</div>
        </section>
    )
}

export default RentalLaptop
