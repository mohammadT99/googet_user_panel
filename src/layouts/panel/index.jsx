import React, {useEffect} from "react";
// styles
import "./style.scss";
import Sidebar from "../../components/particials/sidebar";
import Header from "../../components/particials/header";
import {Breadcrumbs} from "react-daisyui";
import Breadcumbs from "../../components/bradcrumbs";
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";
import Cookies from "js-cookie";
import {websocket} from "../../store/socket.js";
import {useDispatch} from "react-redux";
import {ToastContainer} from "react-toastify";
import {checkUser} from "../../store/auth.js";
import {Home, SidebarLeft} from "iconsax-react";

const PanelLayouts = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchParam = useSearchParams();
    const openSiebar = () => {

    }


    // const user = Cookies.get('user') ;
    useEffect(() => {
        dispatch(checkUser());
        dispatch(websocket());
        const tocken = Cookies.get('user');
        if (tocken) {
            navigate('/')
        } else {
            navigate('/login');
        }

    }, []);


    return (
        <>
            <Header/>
            <div className="panel">
                <div className="sidebar-panel">
                    <Sidebar/>

                </div>

                <div className="pannel__content">

                    <div className="pannel__content__body mt-14">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelLayouts;
