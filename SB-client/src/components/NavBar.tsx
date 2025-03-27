import React from 'react'
import "../App.css"
import { useRecoilState, useSetRecoilState } from 'recoil'
import { menuState } from '../atoms/menu'

const NavBar = () => {
  let setMenu = useSetRecoilState(menuState);
  return (
    <div className='z-10 bg-white absolute left-0 w-[300px] h-[100%] md:w-[26%] md:static md:flex border-2'>
      <div onClick={()=>{
        setMenu(false);
      }} className='md:hidden'>╳</div>
      <h1>NavBar</h1>
    </div>
  )
}

export default NavBar
