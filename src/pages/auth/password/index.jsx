// import './style.scss' ;
import Logo from "../../../assets/image/Googet-Logo.png";
import React, { useState } from "react";
import useLogin from "../login/hooks/useLogin";

const Password = () => {
    const {password} = useLogin()
  const [pass, setPass] = useState([]);
    const handlePassword =  () => {
        password(pass)
    }
  return (
    <>
      <div className="Login">
        <div className="login__content">
          <div className="logo">
            <img src={Logo} width="150" alt="" />
          </div>
          <div className="login__content__header">
            <span className="text-xl font-bold"></span>
          </div>
          <form>
            <div className="login__content__body">
              <span className="text-lg">سلام !</span>
              <p className="text-sm">رمز عبور را وارد کنید</p>
              <input
                type="password"
                className="login"
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="button" className="login-btn-form" onClick={handlePassword}>
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Password;
