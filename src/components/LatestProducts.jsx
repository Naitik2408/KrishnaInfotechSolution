import React from 'react'
import ProductComponent from './LatestProducts/ProductComponent'
import lap1 from '../assets/LatestProducts/WhatsApp Image 2024-07-06 at 6.07.22 PM.jpeg'
import lap2 from '../assets/LatestProducts/WhatsApp Image 2024-07-06 at 6.08.57 PM (1).jpeg'
import lap3 from '../assets/LatestProducts/WhatsApp Image 2024-07-06 at 6.08.57 PM (2).jpeg'
import lap4 from '../assets/LatestProducts/WhatsApp Image 2024-07-06 at 6.08.57 PM.jpeg'

function LatestProducts() {
    return (
        <div>
            <div className="text-center mb-10">
                <div className="ubuntu-bold text-3xl md:text-4xl dark:text-gray-100">Latest Products</div>
                <div className="ubuntu-regular-italic text-gray-600 dark:text-gray-400">"Discover Our Cutting-Edge Technology"</div>
            </div>
            <div className='flex justify-center gap-12 flex-wrap'>
                <ProductComponent image={lap4} title={`HP PROBOOK 440 G5 LIGHT WEIGHT `} subTitle={`Intel Core i5 -8 Gen 8gb Ram | 256 gb SSD Intel GRAPHICS 14 FHD Led Screen BACKLIGHT`}/>
                <ProductComponent image={lap2} title={`LENOVO THINKPAD E430`} subTitle={`Intel Core i3- 2nd Gen 4gb Ram | 128 gb SSD Intel GRAPHICS  14"6 Led Screen EXCELLENT CONDITION`} />
                <ProductComponent image={lap3} title={` DELL LATITUDE E7470 LIGHT WEIGHT`} subTitle={`Intel Core i5 6TH Gen 8gb Ram | 256 gb SSD Intel GRAPHICS With keypad light 14"6 FHD Led Screen EXCELLENT CONDITION`} />
            </div>
        </div>
    )
}

export default LatestProducts
