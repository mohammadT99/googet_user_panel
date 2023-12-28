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
} from "iconsax-react";
// ============== comopnents ========== //
import Avatar from "../../avatar";
import SidebarItem from "../../sidebarItem";
import { space } from "postcss/lib/list";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarItem = [
    {
      title: "داشبورد",
      icon: <Home />,
      to: "/",
    },
    {
      title: "اطلاعات من",
      icon: <User />,
      to: "/",
    },
    {
      title: "نظرات",
      icon: <Message2 />,
      to: "/",
    },
    {
      title: "علاقه مندی ها",
      icon: <FolderFavorite />,
      to: "/",
    },
    {
      title: "سوابق بازدید",
      icon: <Clock />,
    },
  ];

  return (
    <React.Fragment>
      <div className="main">
        <div className="sidebar  top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center ">
          <div className="text-2xl font-medium logo">
            <img src={Logo} alt="" />
          </div>
          <Avatar size="150px" type="user" />
          <div className="sidebar__content">
            {sidebarItem.map((item, i) => {
              return (
                <SidebarItem
                  title={item.title}
                  key={i}
                  icon={item.icon}
                  link={item.to}
                />
              );
            })}
          </div>
          <NavLink to="/" className="sidebar__logout">
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
