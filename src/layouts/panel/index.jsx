import React, {useEffect} from "react";
// styles
import "./style.scss";
import Sidebar from "../../components/particials/sidebar";
import Header from "../../components/particials/header";
import {Breadcrumbs} from "react-daisyui";
import Breadcumbs from "../../components/bradcrumbs";
import {Outlet, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {websocket} from "../../store/socket.js";
import {useDispatch} from "react-redux";

const PanelLayouts = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bread = [
        {
            title: "خانه",
            to: "/",
            active: ''
        },
        {
            title: "خانه",
            to: "/",
            active: ''
        },
        {
            title: "خانه",
            to: "/",
            active: ''
        },
        {
            title: "خانه",
            to: "/",
            active: 'active-brad'
        },
    ]


    // const user = Cookies.get('user') ;
    useEffect(() => {
        dispatch(websocket());
        const tocken = Cookies.get('user');
        if (tocken) {
            navigate('/')
        } else {
            navigate('/login');
        }

    }, [])


    return (
        <>
            <Header/>
            <div className="panel">
                <Sidebar/>
                <div className="pannel__content">
                    <div className="bradcrumb">
                        {bread.map((item, i) => {
                            return (
                                <Breadcumbs bradcrumb={item.title} to={item.to} active={item.active}/>
                            )
                        })}
                    </div>
                    <div className="pannel__content__body">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelLayouts;
