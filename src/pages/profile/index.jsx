import React, { useEffect, useState } from "react";
import Avatar from "../../components/avatar";
import Api from "../../libs/axios";
import Cookies from "js-cookie";

import "./style.scss";

const Profile = () => {
    // state 
  const [userData, setUserData] = useState([]);
  var token = JSON.parse(Cookies.get("user"));
  token = token.user;
  console.log(token);
  const user = async () => {
    const { data } = await Api.get("/user/profile");
    
  };


//   use efect
  useEffect(() => {
    user();
  }, []);
  return (
    <>
      <div className="Profile__content">
        <Avatar type="profile" size="150px" title={token.full_name} />
        <div className="profile__content__forms">
          <form className="form-control">
            <label htmlFor="input-name">نام</label>
            <input
              id="input-name"
              type="text "
              className="input-form"
              value={token.full_name}
            />
            <label htmlFor="input-name" className="label-form">
              نام خانوادگی
            </label>
            <input
              id="input-name"
              type="text "
              className="input-form"
              value={token.full_name}
            />
          </form>
          <form className="form-control">
            <label htmlFor="input-name">شماره موبایل</label>
            <input
              id="input-name"
              type="text "
              className="input-form"
              value={token.mobile}
            />
            <label htmlFor="input-name" className="label-form">
              {" "}
              email
            </label>
            <input
              id="input-name"
              type="text "
              className="input-form"
              value={token.email}
            />
          </form>
        </div>
        <button className="btn-profile">به روزرسانی</button>
        {/* <button>صرفن</button> */}
      </div>
    </>
  );
};

export default Profile;
