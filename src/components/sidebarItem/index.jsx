import React from "react";

import "./style.scss";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ type = "sidebar__navlink", title = "", key = "", icon , link ,  activate }) => {
  return (
    <NavLink className={type}  to={link}>
      <div className="sidebar__item" key={key + 10}>
        <span className="sidebar__icon">{icon}</span>
        <p className="title">{title}</p>
        <span className="tooltiptext hidden">{title}</span>
      </div>
    </NavLink>
  );
};
export default SidebarItem;
