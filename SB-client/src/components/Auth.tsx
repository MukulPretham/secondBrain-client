import { useSetRecoilState } from "recoil"
import { menuState } from "../atoms/menu"


const Auth = () => {
    let setMenu = useSetRecoilState(menuState);
    return (
        <div className='border-2 w-[100%] h-[8%] flex'>
            <div onClick={()=>{setMenu(true)}} className='text-5xl md:hidden'>☰</div>
            <div>LogIn  LogOut</div>
        </div>
    )
}

export default Auth
