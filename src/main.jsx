import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainPage } from './MainPage/MainPage'
import AnimatedCursor from 'react-animated-cursor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SkillsPage } from './SkillsPage/SkillsPage'

const router = createBrowserRouter([

  {
    path:'/',
    element: <MainPage />,
  },

  {
    path: 'skills',
    element: <SkillsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor color='98, 0, 117' outerSize={11} innerSize={8}/>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)
