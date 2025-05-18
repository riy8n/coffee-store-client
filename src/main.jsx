import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import Home from './Components/Home/Home.jsx';
import Layouts from './Layouts/Layouts.jsx';
import CoffeeDetails from './Components/CoffeeDetails/CoffeeDetails.jsx';
import SingIn from './Components/Auth/Singin.jsx';
import SingUp from './Components/Auth/SingUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   element: <Layouts></Layouts>,
   children:[
    {
      index: true,
      loader:()=> fetch('http://localhost:3000/coffees'),
      element:<Home></Home>,
      
    },
    {
      path:"addCoffee",
      element:<AddCoffee></AddCoffee>
    },
    {
      path:'coffee/:id',
          loader: async ({ params }) => {
        const res = await fetch(`http://localhost:3000/coffees/${params.id}`);
        return res.json();
      },
      element:<CoffeeDetails/>,



    },
    {
      path:"updateCoffee/:id",
      loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
      element:<UpdateCoffee></UpdateCoffee>
    },
    {
      path:'singin',
      element:<SingIn></SingIn>
    },
    {
      path:'singup',
      element:<SingUp></SingUp>

    },
    {
      path:'users',
      loader:()=>fetch('http://localhost:3000/users'),
      element:<Users></Users>
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
