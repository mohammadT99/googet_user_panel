//  ================== style =============== //
import "./style.scss";
import Logo from  "../../../assets/image/Googet-Logo.png"
// ================= imports ================ //
import React, { useState } from "react";
import Input from "../../../components/forms/inputs";
import LoginButton from "../../../components/buttons/login-btn";
import { Login } from "iconsax-react";
// import { useLogin} from './hooks/useLogin';
import Api from "../../../libs/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "./hooks/useLogin";

const LoginPage = () => {
  const {setInput , loginData , inputData } = useLogin()
  const [ data , setData] = useState('')
  
  const handleInput = () => {
    
    loginData(data)
    localStorage.setItem('code' , JSON.stringify(data))
    
    
  }

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
         <form onSubmit={handleInput}  >
         <div className="login__content__body">
            <span className="text-lg">سلام !</span>
            <p className="text-sm">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <input type="text" className="login" name="mobile" onChange={(e) => setData(e.target.value)} />
            {/* <Input name="mobile" type="login" /> */}
           {!data ? <p className="text-xs text-red-500">
              لطفا این قسمت را خالی نگذارید
            </p> : null}
            {/* <LoginButton   /> */}
            <button type="button" className="login-btn-form"  onClick={handleInput} >ورود</button>
          </div>
         </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
