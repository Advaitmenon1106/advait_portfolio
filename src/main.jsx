import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainPage } from './MainPage/MainPage'
import AnimatedCursor from 'react-animated-cursor'
import { Ribbon } from './Ribbon/ribbon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor color='98, 0, 117' outerSize={11} innerSize={8}/>
    <Ribbon />
    <MainPage />
  </React.StrictMode>
)
