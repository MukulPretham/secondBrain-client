
import './App.css'
import NavBar from './components/NavBar'

import Main from './components/Main'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuState } from './atoms/menu'
import { useEffect } from 'react'
import { logAtom } from './atoms/log'

function App() {
  let menu = useRecoilValue(menuState);
  let setMenu = useSetRecoilState(menuState);
  let setLogged = useSetRecoilState(logAtom);
  useEffect(()=>{

    let token = localStorage.getItem("token");
    console.log(token);
    if(token){
        setLogged(true);
    }else{
        setLogged(false);
    }
},[])

  
  return (
      <div className='z-0 h-[100%] flex'>
        {menu&&<NavBar />}
        <Main />
      </div>
  )
}

export default App
