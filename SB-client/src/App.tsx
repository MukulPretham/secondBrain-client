
import './App.css'
import NavBar from './components/NavBar'

import Main from './components/Main'
import { useRecoilValue } from 'recoil'
import { menuState } from './atoms/menu'

function App() {
  let menu = useRecoilValue(menuState);
  return (
    
      <div className='z-0 h-[100%] flex'>
        {menu&&<NavBar />}
        <Main />
      </div>

  )
}

export default App
