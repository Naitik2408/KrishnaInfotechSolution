import React from 'react'

function ProductComponent({image, title, subTitle}) {
    return (
        <div className='md:w-80 p-4 shadow-md shadow-gray-500 rounded-lg'>
            <div className='w-full h-52 rounded-lg overflow-hidden bg-red-400'><img src={image} alt="" className='w-full h-full object-cover' /></div>
            {/* <div className='text-center mt-3'>
                <div className='font-bold text-gray-900 border-b border-b-gray-400 pb-3'> {title} </div>
                <div className='text-sm mt-1 text-gray-500 font-semibold py-3'>{subTitle}</div>
            </div> */}
        </div>
    )
}

export default ProductComponent
