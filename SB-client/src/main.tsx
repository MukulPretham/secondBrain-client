import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, } from "react-router";
import { RecoilRoot } from 'recoil';
import SignUp from './components/SignUp.tsx';
import Home from './components/Home.tsx';
import SignIn from './components/SignIn.tsx';
import Youtube from './components/Youtube.tsx';
import AddLink from './components/AddLink.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element: <Home/> },
      {path: "/youtube-Links", element: <Youtube/>},
      {path:"/addLink", element: <AddLink/>},
      {path:"signUp", element: <SignUp/>},
      {path:"signIn", element: <SignIn/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
)
