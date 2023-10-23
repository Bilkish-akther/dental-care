import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Layout/Main';
import AboutMe from './Components/AboutMe/AboutMe';
import Appointment from './Components/Appoinment/Appointment';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

  
    children:[

      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'aboutme',
        element:<AboutMe></AboutMe>
      },
      {
        path:'appointment',
        element: <Appointment></Appointment>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'error',
        element:<Error></Error>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
