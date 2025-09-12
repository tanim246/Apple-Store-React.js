import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Hero from "../Components/Home/Hero";
import Shop from "../Shop/Shop";
import Contact from "../Components/Contact";
import About from "../Components/About/About";



export const Routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Navigate to="/home" />,
            },
            {
                path:"/home",
                element:<Hero />
                
            },
            {
                path:"/shop",
                element:<Shop />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />

            }
        ]
    },
    

])
  