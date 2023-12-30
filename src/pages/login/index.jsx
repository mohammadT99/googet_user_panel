//  ================== style =============== //
import "./style.scss";
import Logo from "../../assets/image/Googet-Logo.png";
// ================= imports ================ //
import React from "react";
import Input from "../../components/forms/inputs";
import LoginButton from "../../components/buttons/login-btn";
import { Login } from "iconsax-react";

const LoginPage = () => {
  return (
    <>
      <div className="Login">
        <div className="login__content">
          <div className="logo">
            <img src={Logo} width="150" alt="" />
          </div>
          <div className="login__content__header">
            <span className="text-xl font-bold">ورود</span>
            <span className="line"></span>
            <span className="text-xl font-bold">ثبت نام</span>
          </div>
         <form action="#">
         <div className="login__content__body">
            <span className="text-lg">سلام !</span>
            <p className="text-sm">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <Input type="login" />
            <p className="text-xs text-red-500">
              لطفا این قسمت را خالی نگذارید
            </p>
            <LoginButton type="login-btn"  />
          </div>
         </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
