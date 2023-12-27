 import React from "react";

 import './style.scss'

const SidebarItem = ({title = '' , key = '' }) => {
    return (
        <i className="sidebar__item" key={key + 10}>
            {title}
        </i>
    )
}
export default  SidebarItem ;