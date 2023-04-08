import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './components/Home';
import Activity from './components/Activity';
import Departments from './components/Departments';
import Class from './components/Class';
import Contract from './components/Contract';
import Registration from './components/Registration';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'activity',
        element:<Activity></Activity>
      },
      {
        path:'departments',
        element:<Departments></Departments>
      },
      {
        path:'class',
        element:<Class></Class>
      },
      {
        path:'contract',
        element:<Contract></Contract>
      },
      {
        path:'registration',
        element:<Registration></Registration>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
