import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PanelLayouts from "../layouts/panel";
import Dashboard from "../pages/dashborad";
import { Login } from "iconsax-react";
import LoginPage from "../pages/login";


const router = createBrowserRouter ([
    {
        path : '/',
        index:false ,
        element : <LoginPage />,
        // element: <PanelLayouts/>,
        children : [
            {
                path:"/" ,
                element : <Dashboard />,
            },
        ]
    }
]);

function Router () {
    return (
        <RouterProvider router={router} />
    )
}

export default Router ;
