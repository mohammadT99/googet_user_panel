import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PanelLayouts from "../layouts/panel";


const router = createBrowserRouter ([
    {
        path : '/',
        index:true ,
        element: <PanelLayouts/>
    }
]);

function Router () {
    return (
        <RouterProvider router={router} />
    )
}

export default Router ;
