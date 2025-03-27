import React from 'react';
import "../App.css";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { menuState } from '../atoms/menu';
import { NavLink } from 'react-router';


const NavBar = () => {
  
  let setMenu = useSetRecoilState(menuState);
  return (
    <div className='z-10 bg-gradient-to-b from-gray-900 to-black text-white absolute left-0 w-[280px] h-full md:static md:w-[24%] flex flex-col border-r border-gray-700 shadow-2xl'>
      <div onClick={() => setMenu(false)} className='md:hidden p-4 cursor-pointer text-gray-400 hover:text-white text-2xl font-bold'>
        ╳
      </div>

      <NavLink className={({ isActive }) => isActive ? "bg-purple-600 text-white mt-1 flex items-center h-[50px] w-[100%] border-l-4 border-purple-400 px-5 text-lg font-semibold transition-all duration-300" : "flex items-center h-[50px] w-[100%] px-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300"} to={"/"}><span>🏠 Home</span></NavLink>
      <NavLink className={({ isActive }) => isActive ? "bg-red-600 text-white mt-1 flex items-center h-[50px] w-[100%] border-l-4 border-red-400 px-5 text-lg font-semibold transition-all duration-300" : "flex items-center h-[50px] w-[100%] px-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300"} to={"/youtube-links"}><span>📺 YouTube</span></NavLink>
      <NavLink className={({ isActive }) => isActive ? "bg-pink-500 text-white mt-1 flex items-center h-[50px] w-[100%] border-l-4 border-pink-400 px-5 text-lg font-semibold transition-all duration-300" : "flex items-center h-[50px] w-[100%] px-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300"} to={"/instagram-Links"}><span>📸 Instagram</span></NavLink>
      <NavLink className={({ isActive }) => isActive ? "bg-blue-600 text-white mt-1 flex items-center h-[50px] w-[100%] border-l-4 border-blue-400 px-5 text-lg font-semibold transition-all duration-300" : "flex items-center h-[50px] w-[100%] px-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300"} to={"/news-Links"}><span>📰 Twitter</span></NavLink>
      <NavLink className={({ isActive }) => isActive ? "bg-green-600 text-white mt-1 flex items-center h-[50px] w-[100%] border-l-4 border-green-400 px-5 text-lg font-semibold transition-all duration-300" : "flex items-center h-[50px] w-[100%] px-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300"} to={"/documents-Links"}><span>📄 Documents</span></NavLink>
    </div>
  );
};

export default NavBar;