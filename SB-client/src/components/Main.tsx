import React from 'react'
import Auth from './Auth'
import Home from './Home'
import { Outlet } from 'react-router'

const Main = () => {
    return (
        <div className='h-[100%] bg-gray-900 w-[100%] md:w-[76%]'>
            <Auth />
            <Outlet/>
        </div>
    )
}

export default Main
