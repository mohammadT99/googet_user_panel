// import './style.scss' ;
import Logo from "../../../assets/image/Googet-Logo.png";
import React, { useState } from "react";
import useLogin from "../login/hooks/useLogin";
import { ToastContainer } from "react-toastify";

const Password = () => {
    const {password , passerr} = useLogin()
  const [pass, setPass] = useState([]);
  const [eror , setEror] = useState(false)
    const handlePassword =  () => {
        if(pass.length<=5){
          setEror(true)
        }else{
          password(pass)
        }
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
            <span className="text-xl font-bold"></span>
          </div>
          <form>
            <div className="login__content__body">
              <span className="text-lg">سلام !</span>
              <p className="text-sm">رمز عبور را وارد کنید</p>
              <input
                type="password"
                className={`login ${eror ? 'border-red-500 border-2' : null}`}
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
              {eror ? <span className="text-xs text-red-500">گزینه  کلمه عبور کمتر از 6کاراکتر است</span> :null}
              <span className="text-xs text-red-500">{passerr}</span>
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
