import React from "react";
//  ================ image ================= //
import Logo from "../../../assets/image/Googet-Logo.png";
// =================== styles ============== //
import "./style.scss";
//================== icons imports ============= //
import {
    Home,
    User,
    Message2,
    FolderFavorite,
    Clock,
    LogoutCurve,
    Messages3, SidebarLeft,
} from "iconsax-react";
// ============== comopnents ========== //
import Avatar from "../../avatar";
import SidebarItem from "../../sidebarItem";
import {space} from "postcss/lib/list";
import {NavLink} from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = ({type = "panel", addClass = ""}) => {
    //state
    // var _user = JSON.parse(Cookies.get("user"))
    // _user = _user.user

    //functions
    const handleLogOut = () => {
        Cookies.remove("user");
        if (!Cookies.get("user")) {
            location.replace("/login");
        } else {
            console.log("not");
        }
    };
    // console.log(_user);
    const sidebarItem = [
        {
            title: "داشبورد",
            icon: <Home/>,
            to: "/",
        },
        {
            title: "اطلاعات من",
            icon: <User/>,
            to: "/profile",
        },
        {
            title: "دیدگاه های من",
            icon: <Message2/>,
            to: "/comments",
        },
        {
            title: "چت",
            icon: <Messages3/>,
            to: "/chat",
        },
        {
            title: "علاقه مندی ها",
            icon: <FolderFavorite/>,
            to: "/interest",
        },
        {
            title: "سوابق بازدید",
            icon: <Clock/>,
            to: "/recentvisit",
        },
    ];


    const openSiebar = () => {
        const element = document.getElementById('sidebar')
        element.classList.toggle('flex')
    }

    return (
        <React.Fragment>
            <div className={`main ${type} ${addClass}`}>
                <div className="sidebar__icon__responsive sm:flex md:flex lg:hidden" onClick={openSiebar}>
                    <SidebarLeft/>
                </div>
                <div className="sidebar  top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center mt-8 " id="sidebar">
                    <div className="sidebar__icon__responsive__side sm:flex md:hidden lg:hidden shadow-2xl"
                         onClick={openSiebar}>
                        <SidebarLeft/>
                    </div>
                    <div className="text-2xl font-medium logo sm:flex ">
                        <img src={Logo} alt=""/>
                    </div>
                    <Avatar size="150px" type="user"/>
                    <div className="sidebar__content">
                        {sidebarItem.map((item, i) => {
                            return (
                                <SidebarItem
                                    // type=""
                                    title={item.title}
                                    key={i}
                                    icon={item.icon}
                                    link={item.to}
                                />
                            );
                        })}
                    </div>
                    <div className="sidebar__content__min ">
                        {sidebarItem.map((item, i) => {
                            return (
                                <SidebarItem
                                    title={item.title}
                                    type="sideabar_min"
                                    key={i}
                                    icon={item.icon}
                                    link={item.to}
                                />
                            );
                        })}
                    </div>
                    <NavLink to="/" onClick={handleLogOut} className="sidebar__logout">
            <span>
              <LogoutCurve/>
            </span>
                        <h1 className="text-sm">خروج از حساب کاربری</h1>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
