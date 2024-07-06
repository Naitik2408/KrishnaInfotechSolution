import React from 'react'
import ProductComponent from './LatestProducts/ProductComponent'

function LatestProducts() {
    return (
        <div>
            <div className="text-center mb-10">
                <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Latest Products</div>
                <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Our commitment to quality service"</div>
            </div>
            <div className='flex justify-center gap-12 flex-wrap'>
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent/>
                <ProductComponent/>
            </div>
        </div>
    )
}

export default LatestProducts
