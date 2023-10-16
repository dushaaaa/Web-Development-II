import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Settings from './components/Settings.jsx'

const Router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/settings',
    element: <Settings/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {Router} />
  </React.StrictMode>,
)
