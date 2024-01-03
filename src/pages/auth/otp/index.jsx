import React, { useState } from "react";
import useLogin from "../login/hooks/useLogin";
import Logo from '../../../assets/image/Googet-Logo.png'
const CheckCode = () => {
    const [ number , setnumber] = useState(localStorage.getItem('code'))
    const [code , setCode] = useState([])
    const {check , inputData , input } = useLogin();
    // console.log(code);

    const checkCode = () => {
        // console.log('hhh')
        check(code);
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
         <form  >
         <div className="login__content__body">
            <span className="text-lg">سلام !</span>
            <p className="text-sm">
               کد ارسال شده به شماره را وارد کنید:{number}
            </p>
            <input type="text" className="login" name="code" onChange={(e) => setCode(e.target.value)} />
            {/* <Input name="mobile" type="login" /> */}
           {!code ? <p className="text-xs text-red-500">
              لطفا این قسمت را خالی نگذارید
            </p> : null}
            {/* <LoginButton   /> */}
            <button type="button" className="login-btn-form" onClick={checkCode}  >ورود</button>
          </div>
         </form>
        </div>
      </div>
    </>
 )
}

export default CheckCode ;