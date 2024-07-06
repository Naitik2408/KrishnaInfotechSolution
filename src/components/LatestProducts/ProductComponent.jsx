import React from 'react'

function ProductComponent() {
    return (
        <div className='w-80 p-4 shadow-md shadow-gray-500 rounded-lg'>
            <div className='w-full h-52 rounded-lg overflow-hidden bg-red-400'><img src="https://images.unsplash.com/photo-1720211370947-68088964ae6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' /></div>
            <div className='text-center mt-3'>
                <div className='font-bold text-gray-900 border-b border-b-gray-400 pb-3'> HP PROBOOK 440 G5
                    LIGHT WEIGHT </div>
                <div className='text-sm mt-1 text-gray-500 font-semibold py-3'>Intel Core i5 -8 Gen, 8gb Ram | 256 gb SSD, Intel GRAPHICS, 14 FHD Led Screen BACKLIGHT</div>
            </div>
        </div>
    )
}

export default ProductComponent
