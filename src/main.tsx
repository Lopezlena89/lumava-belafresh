import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import './index.css'
import { App } from './App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element:<Navigate to="/"/>,
  },
  
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
)
