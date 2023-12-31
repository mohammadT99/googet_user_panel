// ================= styles ================ //
import "./style.scss";
// ===================== imports =============== //
import React from "react";
//logo
import logo from "../../../assets/image/Googet-Logo.png";
import SearchForm from "../../forms/searchForm";
import Navbar from "../../navbar/inde";
import NavbarSections from "../../navbar/inde";
import LoginButton from "../../buttons/login-btn";
import { HambergerMenu, Login, Wallet } from "iconsax-react";
import Wallets from "../../buttons/walets";

// import { Navbar } from 'react-daisyui';

const Header = () => {
  const headerItem = [
    {
      title: "خانه",
      to: "/",
    },
    {
        title : "محصولات",
        to : "/"
    },
    {
        title : "محصولات",
        to : "/"
    },
    {
        title : "محصولات",
        to : "/"
    },
    
  ];
  return (
    <>
      <div className="header">
        <div className="resonsive__menue">
        <HambergerMenu />
        </div>
        <img className="logo" src={logo} width={70} alt="" />

           <div className="navbar__header">
        <SearchForm />
           {headerItem.map((item , i) => {
                return(
                    <NavbarSections 
                    title={item.title}
                    key={i}
                    to ={item.to}
                    />
                )
            })}

           </div>
            <div className="header__left">
            <Wallets  inventory ='2,0000' />
            <LoginButton type="header_login" icon={<Login/>}/>
            </div>
      </div>
    </>
  );
};

export default Header;
