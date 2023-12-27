import React from "react";

import "./style.scss";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title = "", key = "", icon , link  }) => {
  return (
    <NavLink className="navlink " to={link}>
      <i className="sidebar__item" key={key + 10}>
        {title}
        <span>{icon}</span>
      </i>
    </NavLink>
  );
};
export default SidebarItem;
