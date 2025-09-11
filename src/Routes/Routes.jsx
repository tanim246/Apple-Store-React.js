import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Hero from "../Components/Home/Hero";
import Shop from "../Shop/Shop";



export const Routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<App />,
            },
            // {
            //     path:"/",
            //     element:<Hero />
            // },
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
                element: <div>About</div>
            },
        ]
    },
    

])
  