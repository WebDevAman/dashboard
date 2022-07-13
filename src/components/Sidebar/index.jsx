import React from 'react'
import { AiOutlineHome, AiOutlineChrome } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { FiKey, FiHelpCircle } from 'react-icons/fi'
import { TbTypography, TbShadow, TbIcons } from 'react-icons/tb'
import { HiOutlineColorSwatch } from 'react-icons/hi'

const index = () => {
    return (
        <div className='flex h-screen sticky inset-0 overflow-y-scroll min-w-[16rem] py-6 pl-6 flex-col '>
            <div className='py-2'>
                LOGO
            </div >
            <div className="border-b mt-6 py-4 space-y-1 full">
                <h2 className='text-sm font-medium mb-2 uppercase opacity-80'>Dashboard</h2>
                <div className="py-3 items-center cursor-pointer  text-themeBlue bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <AiOutlineHome className='text-lg' />
                    <p>Default</p>
                </div>
            </div>
            <div className="border-b py-4 mt-2 space-y-1 full">
                <h2 className='text-sm font-medium mb-2 uppercase opacity-80'>Utilities</h2>
                <div className="text-xs pb-3 opacity-70">Pages Caption</div>

                <div className="py-3 justify-between items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <div className="flex items-center space-x-4">
                        <FiKey className='text-lg' />
                        <p>Icons</p>
                    </div>
                    <BsChevronDown className='text-lg' />
                </div>
            </div>
            <div className="border-b py-4 mt-2 space-y-1 full">
                <h2 className='text-sm font-medium mb-2 uppercase opacity-80'>Utilities</h2>
                <div className="py-3 items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <TbTypography className='text-lg' />
                    <p>Typography</p>
                </div>
                <div className="py-3 items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <HiOutlineColorSwatch className='text-lg' />
                    <p>Color</p>
                </div>
                <div className="py-3 items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <TbShadow className='text-lg' />
                    <p>Shadow</p>
                </div>
                <div className="py-3 justify-between items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <div className="flex items-center space-x-4">
                        <TbIcons className='text-lg' />
                        <p>Icons</p>
                    </div>
                    <BsChevronDown className='text-lg' />
                </div>
            </div>

            <div className="border-b py-4 space-y-1 full">
                <div className="py-3 items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <AiOutlineChrome className='text-lg' />
                    <p>Sample Page</p>
                </div>
                <div className="py-3 items-center cursor-pointer  hover:text-themeBlue hover:bg-themeLightBlue  rounded-lg w-full px-4 flex space-x-4">
                    <FiHelpCircle className='text-lg' />
                    <p>Documentation</p>
                </div>
            </div>
        </div >
    )
}

export default index