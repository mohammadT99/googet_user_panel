import React from "react";
// styles
import "./style.scss";
import Sidebar from "../../components/particials/sidebar";
import Header from "../../components/particials/header";
import { Breadcrumbs } from "react-daisyui";
import Breadcumbs from "../../components/bradcrumbs";
import { Outlet } from "react-router-dom";

const PanelLayouts = () => {
    const bread = [
        {
            title : "خانه"  ,
            to : "/",
            active : ''
        },
        {
            title : "خانه"  ,
            to : "/",
            active : ''
        },
        {
            title : "خانه"  ,
            to : "/",
            active : ''
        },
        {
            title : "خانه"  ,
            to : "/",
            active : 'active-brad'
        },
    ]
  return (
    <>
      <Header />
      <div className="panel">
        <Sidebar />
        <div className="pannel__content">
        <div className="bradcrumb">
        {bread.map((item , i) => {
            return (
              <Breadcumbs  bradcrumb={item.title} to={item.to} active={item.active} />
            )
        })}
        </div>
        <div className="pannel__content__body">
            <Outlet />
        </div>
        </div>
        </div>
    </>
  );
};

export default PanelLayouts;