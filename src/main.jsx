import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AboutUs from './AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/',
    element: <AboutUs/>,
  },
  {
    path: '/',
    element: <Checkout/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvier router={router}/>
  </StrictMode>,
);