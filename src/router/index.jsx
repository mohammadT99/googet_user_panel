import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PanelLayouts from "../layouts/panel";
import Dashboard from "../pages/dashborad";
import { Check, Login } from "iconsax-react";
import LoginPage from "../pages/auth/login"; 
import Chat from "../layouts/chat";
import CheckCode from "../pages/auth/otp";
// import {AuthMiddleware} from "../middleware/auth";



const router = createBrowserRouter ([
    {
        path : '/',
        index:false ,
        element: <PanelLayouts/>,
        children : [
            {
                path:"/" ,
                element : <Dashboard />,
                // element : <Chat /> ,
            },
        ],
    },
    {
        path : '/chat' , 
        element : <Chat />
    },
    {
        path : '/login' ,
        element : <LoginPage />
    },
    {
        path : '/login/otp',
        element :<CheckCode />
    },
]);

function Router () {
    return (
        <RouterProvider router={router} />
    )
}

export default Router ;
