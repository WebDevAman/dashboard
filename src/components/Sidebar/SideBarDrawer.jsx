import React from 'react'
import Sidebar from './index'
import { Drawer } from '@material-ui/core'

const SideBarDrawer = ({ setOpen, open }) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Drawer
            open={open}
            anchor='left'
            onClose={handleClose}
        >
            <div className="pr-4">
                <Sidebar />
            </div>
        </Drawer>
    )
}

export default SideBarDrawer