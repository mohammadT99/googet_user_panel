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
import { space } from "postcss/lib/list";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = ({ type = "panel" }) => {

  //functions
  const handleLogOut = () => {
    Cookies.remove("user");
    if (!Cookies.get("user")) {
      location.replace("/login");
    } else {
      console.log("not");
    }
  };


  const sidebarMin = () => {
const sidebarMin = document.getElementById('sidebar')
    const sidebarButton = document.getElementById('sidebar__icon__min')
    sidebarMin.classList.toggle('flex-sidebar') ;
    sidebarButton.classList.toggle('sidebar__boutton__close')
    console.log('ghghg' , sidebarMin)
  }
  // console.log(_user);
  const sidebarItem = [
    {
      title: "داشبورد",
      icon: <Home />,
      to: "/",
    },
    {
      title: "اطلاعات من",
      icon: <User />,
      to: "/profile",
    },
    {
      title: "دیدگاه های من",
      icon: <Message2 />,
      to: "/comments",
    },
    {
      title: "چت",
      icon: <Messages3 />,
      to: "/chat",
    },
    {
      title: "علاقه مندی ها",
      icon: <FolderFavorite />,
      to: "/interest",
    },
    {
      title: "سوابق بازدید",
      icon: <Clock />,
      to: "/recentvisit",
    },
  ];

  return (
    <React.Fragment>
      <div className={`main ${type}`}>
        <span className='sidebar__boutton' onClick={sidebarMin} id="sidebar__icon__min">
          <SidebarLeft />
        </span>
        <div className="sidebar  top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center mt-8 " id='sidebar'>
          <div className="text-2xl font-medium logo">
            <img src={Logo} alt="" />
          </div>
          <Avatar size="150px" type="user" />
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
              <LogoutCurve />
            </span>
            <h1 className="text-sm">خروج از حساب کاربری</h1>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
