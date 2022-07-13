import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsHandbag, BsShop } from 'react-icons/bs'
import SparkLine from './Charts/SparkLine'

const WidgetsSmall = () => {
    return (
        <div className="grid  grid-cols-2 xl:grid-cols-3 w-full gap-4 xl:gap-6">
            {/* purple widget  */}
            <div className="rounded-xl col-span-2 sm:col-span-1 overflow-hidden relative flex flex-col space-y-6 border border-themeLightPurple p-6 bg-themePurple">
                <div className="flex items-center justify-between">
                    <div className="border-themeLightPurple hover:shadow-lg border w-fit text-white text-2xl cursor-pointer bg-themeDarkPurple p-3 rounded-lg">
                        <RiMoneyDollarCircleLine />
                    </div>
                    <div className="border relative z-20  hover:shadow-lg border-themeLightPurple w-fit text-white text-2xl cursor-pointer bg-themeLightPurple p-3 rounded-lg">
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div className="flex flex-col space-y-2 relative z-20 ">
                    <h1 className='text-3xl lg:text-3xl font-bold text-white'>
                        $500.00
                    </h1>
                    <h3 className='text-base opacity-70 lg:text-lg font-semibold text-white'>
                        Total Earning
                    </h3>
                </div>
                <div className="absolute z-10 w-[14rem] h-[14rem] rounded-full bg-themeDarkPurple right-[-5rem] top-[-5rem]"></div>

            </div>
            {/* purple widget  */}



            {/* purple widget  */}
            <div className="rounded-xl col-span-2 sm:col-span-1 overflow-hidden relative flex flex-col space-y-6 border border-themeLightBlue p-6 bg-themeBlue">
                <div className="flex items-center justify-between">
                    <div className="border-themeBlue hover:shadow-lg border w-fit text-white text-2xl cursor-pointer bg-themeDarkBlue  p-3 rounded-lg">
                        <BsHandbag />
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className=" relative z-20 text-sm hover:shadow-lg font-medium w-fit text-white  cursor-pointer  px-4 py-1.5 rounded-md">
                            Month
                        </div>
                        <div className="border relative z-20 text-sm hover:shadow-lg font-medium border-themeDarkBlue w-fit text-white  cursor-pointer bg-themeBlue px-4 py-1.5 rounded-md">
                            Year
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center space-x-6 relative z-20 ">
                    <div className="flex flex-col space-y-2 ">
                        <h1 className='text-3xl lg:text-3xl font-bold text-white'>
                            $961
                        </h1>
                        <h3 className='text-base opacity-70 lg:text-lg font-semibold text-white'>
                            Total Orders
                        </h3>
                    </div>
                    <div className="flex-1 p-6  z-20">
                        <SparkLine

                            currentColor='#fff' id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)"
                        />
                    </div>
                </div>
                <div className="absolute z-10 w-[14rem] h-[14rem] rounded-full bg-themeDarkBlue right-[-5rem] top-[-5rem]"></div>

            </div>
            {/* purple widget  */}



            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-rows-2 xl:grid-cols-1 col-span-2 xl:col-span-1 gap-4">
                {/* purple widget  */}
                <div className="rounded-xl overflow-hidden justify-center relative flex flex-col space-y-4 border border-themeLightPurple p-4 bg-themePurple">
                    <div className="flex items-center space-x-4">
                        <div className="border-themeLightPurple hover:shadow-lg border w-fit text-white text-2xl cursor-pointer bg-themeDarkPurple p-3 rounded-lg">
                            <BsShop />
                        </div>
                        <div className="flex flex-col space-y-1 text-white">
                            <h2 className='text-base lg:text-lg font-bold'>203k</h2>
                            <p className='text-sm opacity-70'>Total Income</p>
                        </div>
                    </div>
                    <div className="absolute z-10 w-[14rem] h-[14rem] rounded-full bg-themeDarkPurple right-[-5rem] top-[-5rem]"></div>

                </div>
                <div className="rounded-xl overflow-hidden relative justify-center flex flex-col space-y-4 border border-themeLightGolden p-4 bg-white">
                    <div className="flex items-center space-x-4">
                        <div className=" hover:shadow-lg border border-themeLightGolden w-fit text-themeGolden text-2xl cursor-pointer bg-themeLightGolden p-3 rounded-lg">
                            <BsShop />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <h2 className='text-base lg:text-lg font-bold'>203k</h2>
                            <p className='text-sm opacity-70'>Total Income</p>
                        </div>
                    </div>

                    <div className="absolute z-10 w-[14rem] h-[14rem] rounded-full bg-themeLightGolden right-[-5rem] top-[-5rem]"></div>

                </div>
                {/* purple widget  */}
            </div>


        </div>
    )
}

const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },

];
export default WidgetsSmall