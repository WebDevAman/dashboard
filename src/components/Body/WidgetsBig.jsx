import React from 'react'
import { MdArrowDropDown, MdMoreHoriz } from 'react-icons/md'
import { FaChevronUp } from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'

const WidgetsBig = () => {
    const locale = 'en'
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0 lg:gap-6'>
            <div className="col-span-2">
                <div className="min-h-[600px] p-6 shadow-sm w-full border flex flex-col border-themeLightBlue rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col space-y-1">
                            <div className="text-xs opacity-70">Total Growth</div>
                            <h1 className='text-xl lg:text-2xl font-bold '>
                                $500.00
                            </h1>
                        </div>
                        <div className="h-full group w-fit transition-all duration-500 relative cursor-pointer group">
                            <div className='flex group-hover:border-2 group-hover:border-themeBlue space-x-2 border-2 shadow-sm py-2 px-4 rounded-md items-center'>
                                <p className='text-base'>Today</p>
                                <MdArrowDropDown />
                            </div>
                            <div className="absolute group-hover:h-fit overflow-hidden group-hover:overflow-auto  group-hover:shadow-md h-0 top-[105%] w-full group-hover:border bg-white">
                                <div className={`flex space-x-2 items-center p-2 cursor-pointer ${locale === 'Today' ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                    <p className='text-sm'>Today</p>
                                </div>
                                <div className={`flex space-x-2 items-center p-2 cursor-pointer ${locale === 'This Month' ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                    <p className='text-sm'>This Month</p>
                                </div>
                                <div className={`flex space-x-2 items-center p-2 cursor-pointer ${locale === 'This Year' ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                    <p className='text-sm'>This Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="min-h-[600px] space-y-6 px-6 pt-4 pb-2 flex flex-col shadow-sm w-full border border-themeLightBlue rounded-lg bg-white">
                    <div className="flex justify-between items-center">
                        <h1 className='text-lg md:text-xl font-semibold'>Popular Stocks</h1>
                        <div className='text-2xl h-9 rounded-full flex items-center justify-center w-9 hover:bg-themeLightBlue cursor-pointer text-themeBlue'>
                            <MdMoreHoriz />
                        </div>
                    </div>
                    <div className="w-full min-h-[220px] bg-themeBlue rounded-lg shadow-sm"></div>
                    <div className="flex h-full overflow-scroll flex-col space-y-1">
                        <div className="px-2 py-3 border-b bg-white flex items-start justify-between">
                            <div className="flex flex-col space-y-1">
                                <h3 className='text-base md:text-lg font-semibold opacity-80'>Bajaj Finery</h3>
                                <p className='text-sm text-green-500'>10% profit</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <h2 className='font-semibold opacity-80'>$1830.00</h2>
                                <div className='text-green-500 flex items-center justify-center bg-green-200 w-5 h-5 rounded-md'>
                                    <FaChevronUp />
                                </div>
                            </div>
                        </div>
                        <div className="px-2 py-3 border-b bg-white flex items-start justify-between">
                            <div className="flex flex-col space-y-1">
                                <h3 className='text-base md:text-lg font-semibold opacity-80'>TMTL</h3>
                                <p className='text-sm text-red-500'>10% Loss</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <h2 className='font-semibold opacity-80'>$1830.00</h2>
                                <div className='text-red-500 flex items-center rotate-180 justify-center bg-red-200 w-5 h-5 rounded-md'>
                                    <FaChevronUp />
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pt-3  bg-white flex items-start justify-between">
                            <div className="flex flex-col space-y-1">
                                <h3 className='text-base md:text-lg font-semibold opacity-80'>Bajaj Finery</h3>
                                <p className='text-sm text-green-500'>10% profit</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <h2 className='font-semibold opacity-80'>$1830.00</h2>
                                <div className='text-green-500 flex items-center justify-center bg-green-200 w-5 h-5 rounded-md'>
                                    <FaChevronUp />
                                </div>
                            </div>
                        </div>
                        <div className="w-fit items-center bg-themeLightBlue px-2  py-1 text-sm  text-themeBlue rounded-md flex space-x-4 mx-auto">
                            See all
                            <BiChevronRight className='text-lg' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default WidgetsBig