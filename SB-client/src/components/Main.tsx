import React from 'react'
import Auth from './Auth'
import Home from './Home'

const Main = () => {
    return (
        <div className='h-[100%] w-[100%] md:w-[76%]'>
            <Auth />
            <Home/>
        </div>
    )
}

export default Main
