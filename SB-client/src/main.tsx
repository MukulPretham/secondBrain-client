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
import Instagram from './components/Instagram.tsx';
import News from './components/News.tsx';
import Documents from './components/Documents.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index:true, element: <Home/> },
      {path:"addLink", element: <AddLink/>},
      {path: "/youtube-Links", element: <Youtube/>},
      {path: "/instagram-Links", element: <Instagram/>},
      {path: "/news-Links", element: <News/>},
      {path:"/documents-Links", element: <Documents/>},
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
