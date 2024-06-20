import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-red-200 h-60'>
                <div className='flex'>
                    <div>
                        <div className='right px-11 py-3 w-1/2 border-l text-xl font-bold'>About GOTAN DAIRY</div>
                        <div className='px-11 w-1/2 border-l text-md pb-11 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla acc</div>
                    </div>
                    <div>
                        <div className='right px-11 py-3 w-1/2 text-xl font-bold'>Address</div>
                        <div className='px-11 text-md pb-2 font-normal'>Gotan, Rajasthan</div>
                        <div className='px-11 text-md pb-2 font-bold'>Terms And Conditions</div>
                        <div className='px-11 text-md pb-2 font-bold'>MSME Certificate</div>
                    </div>
                </div>
                <div className='border border-slate-500'></div>
                <div className='px-11 py-4'>
                (c) ALL RIGHTS RESERVED | HRI</div>
            </div>
            <footer className="bg-blue-500 p-4 flex justify-between items-center">
                <div className="text-white">
                    &copy; 2024 Gotan Dairy. All rights reserved.
                </div>
                <div className="text-white">
                    Contact us: info@gotandairy.com
                </div>
            </footer>
        </>
    )
}

export default Footer
