//  ===================== style and logo ================= //
import './style.scss' ;
import LogonMin from '../../../../assets/image/Googet-Logo.png'
// ================== imports ================= //
import { FolderFavorite, Home, Logout, Message2, User } from 'iconsax-react';
import SidebarItem from '../../../sidebarItem';
import React from 'react';
import Avatar from '../../../avatar';
// import { Avatar } from 'react-daisyui';

const SideabarMin = () => {
    const sidebarMinItem = [
        {
            title : 'خانه' , 
            icon : <Home /> ,
            to : '/'
        } ,
        {
            title : 'خانه' , 
            icon : <User /> ,
            to : '/'
        } ,
        {
            title : 'خانه' , 
            icon : <Message2 /> ,
            to : '/'
        } ,

        {
            title : 'خانه' , 
            icon : <FolderFavorite /> ,
            to : '/'
        } ,
        




    ]

    return (
        <>
            <div className="sidebarMin">
                <div className="logo">
                    <img src={LogonMin} width={80} alt="" />
                </div>
                <Avatar size='50px' textsize='12px' />
                <div className="sideabr_min_content">
                {sidebarMinItem.map((item ,i ) => {
                    return(
                        <SidebarItem type='sideabar_min' icon={item.icon} link={item.to}  />
                    )
                })}
                </div>

                <div className="log_out">
                <Logout />
                </div>
            </div>
        </>
    )
}

export  default SideabarMin ;


