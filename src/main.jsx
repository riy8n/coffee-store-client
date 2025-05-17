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
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
