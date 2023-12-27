import React from "react"
//  ================ image ================= //
import Logo from "../../../assets/image/Googet-Logo.png"
// =================== styles ============== //
import "./style.scss"
//================== icons imports ============= //
import { Home, User } from "iconsax-react"
// ============== comopnents ========== //
import Avatar from "../../avatar"
import SidebarItem from "../../sidebarItem"
import { space } from "postcss/lib/list"

const Sidebar = () => {
    const sidebarItem = [
        {
            title: 'داشبورد',
            icon: <Home /> ,
            to: '/'
        },
        {
            title : 'اطلاعات من' , 
            icon : <User />,
            to : '/'
        },
        
    ]
    
    return (
        <React.Fragment>
            <div className="main">
                <div className="sidebar fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center ">
                    <div className="text-2xl font-medium logo">
                        <img src={Logo} alt="" />
                    </div>
                    <Avatar size="150px" type="user" />
                    <div className="sidebar__content">
                    {sidebarItem.map((item , i ) => {
                        return(
                            <SidebarItem title={item.title} key={} />
                        )
                    })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar ;