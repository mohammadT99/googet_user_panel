import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PanelLayouts from "../layouts/panel";
import Dashboard from "../pages/dashborad";
import { Login } from "iconsax-react";
import LoginPage from "../pages/login";
import Chat from "../layouts/chat";


const router = createBrowserRouter ([
    {
        path : '/',
        index:false ,
        // element : <LoginPage />,
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
    }
]);

function Router () {
    return (
        <RouterProvider router={router} />
    )
}

export default Router ;
