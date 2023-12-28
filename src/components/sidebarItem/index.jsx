import React from "react";

import "./style.scss";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title = "", key = "", icon , link ,  activate }) => {
  return (
    <NavLink className="sidebar__navlink "  to={link}>
      <div className="sidebar__item" key={key + 10}>
        <span className="sidebar__icon">{icon}</span>
        {title}
      </div>
    </NavLink>
  );
};
export default SidebarItem;
