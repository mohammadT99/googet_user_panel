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
import { ToastContainer } from "react-toastify";
import { Rules } from "../../../validation";

const LoginPage = () => {
  const {setInput , loginData , inputData } = useLogin()
  const [ data , setData] = useState('')
  const [err , setErr ] =useState(false)
  
  const handleInput = () => {
  if(data){
    if(data && /\b09\d{9}\b/.test(data)) {
      loginData(data)
    }
    
    else  return setErr(true)
  }
    
    console.log( 'sdsdsd', err) ;
    localStorage.setItem('code' , JSON.stringify(data))
    
    
  }

  const roule = () => {
    console.log(popo)
  }

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
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
         <form onSubmit={handleInput}  noValidate >
         <div className="login__content__body">
            <span className="text-lg">سلام !</span>
            <p className="text-sm">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <input type="text" className={`login ${err ? 'border-red-500  border-2': null}`} name="mobile" onChange={(e) => setData(e.target.value)}   />
            {/* <Input name="mobile" type="login" /> */}
           {!data ? <p className="text-xs text-red-500">
              لطفا این قسمت را خالی نگذارید
            </p> : null}
            {err ? <p className="text-xs text-red-500">موبایل را به درستی وارد کنید</p> : null}
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
