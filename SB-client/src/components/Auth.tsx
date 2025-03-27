import { useRecoilValue, useSetRecoilState } from "recoil"
import { menuState } from "../atoms/menu"
import { NavLink } from "react-router";
import { logAtom } from "../atoms/log";


const Auth = () => {
    let setMenu = useSetRecoilState(menuState);
    const logged = useRecoilValue(logAtom);
    const setLogged = useSetRecoilState(logAtom);
    return (
        <div className='from-gray-900 to-black w-[100%] h-[8%] flex justify-end items-center'>
            <div onClick={() => { setMenu(true) }} className='absolute left-0 text-5xl md:hidden'>☰</div>
            <div className="flex gap-2">
                {logged ? <>
                    <NavLink to={"addLink"}>
                    <div className="hover:bg-purple-400 hover:border-purple-400 bg-purple-500 hover:text-black rounded-2xl cursor-pointer p-3">Add Link</div>
                    </NavLink>
                    <div onClick={() => {
                        localStorage.removeItem("token");
                        setLogged(false);
                    }} className="hover:bg-purple-600 hover:text-white bg-purple-500 rounded-2xl cursor-pointer p-3">Log-out</div>
                </> :
                    <>
                        <NavLink className={({ isActive }) => isActive ? "bg-purple-600 rounded-2xl text-white" : "bg-purple-500"} to={"/signUp"}><div className="hover:bg-purple-600 hover:text-white rounded-2xl cursor-pointer p-3 bg-purple-500">Sign-Up</div></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "bg-purple-600 rounded-2xl text-white" : "bg-purple-500"} to={"/signIn"}><div className="hover:bg-purple-600 hover:text-white rounded-2xl cursor-pointer p-3 bg-purple-500">Sign-In</div></NavLink>
                    </>

                }
            </div>
        </div>
    )
}

export default Auth
