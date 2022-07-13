import React from 'react'
import { FiSettings } from 'react-icons/fi'
import WidgetsSmall from './WidgetsSmall'
import SideBarDrawer from '../Sidebar/SideBarDrawer'
import WidgetsBig from './WidgetsBig'
import { AiOutlineMenu } from 'react-icons/ai'

const index = ({ setOpen, open }) => {
    return (
        <div className='flex flex-col w-full p-4 xl:p-6 space-y-3 xl:space-y-6'>
            <SideBarDrawer open={open} setOpen={setOpen} />
            <header className='flex justify-between xl:justify-end'>
                <div onClick={() => setOpen(true)} className='xl:hidden border cursor-pointer border-themeBorderBlue items-center bg-themeLightBlue w-10 h-10 flex justify-center rounded-full'>
                    <AiOutlineMenu className='text-xl text-themeBlue' />
                </div>
                <div className="w-fit flex border border-themeBorderBlue items-center space-x-4 bg-themeLightBlue rounded-full px-1.5 xl:px-3 xl:py-2 py-1">
                    <Avatar img='/images/avatar.jpg' />
                    <FiSettings className='cursor-pointer text-2xl text-themeDarkBlue' />
                </div>
            </header>
            <div className='flex p-4 xl:p-6 flex-col w-full  space-y-6 rounded-xl bg-themeLightBlue border border-themeBorderBlue'>
                <WidgetsSmall />
                <WidgetsBig />
            </div>
        </div>
    )
}

const Avatar = ({ img }) => {
    return (
        <>
            <img src={img} className='w-8 h-8 rounded-full object-cover' />
        </>
    )
}

export default index