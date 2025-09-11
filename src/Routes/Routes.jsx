import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Hero from "../Components/Home/Hero";



export const Routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<App />
            },
            {
                path:"/home",
                element:<Hero />
            },
            {
                path:"products",
                element: <div>hello</div>
            },
        ]
    },
    

])
  