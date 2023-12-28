//  ================== style =============== //
import './style.scss' ;
import  Logo from '../../assets/image/Googet-Logo.png'
// ================= imports ================ //
import React from 'react';
import Input from '../../components/forms/inputs';


const LoginPage = () => {
    return (
        <>
            <div className="Login">
                <div className="login__content">
                    <div className="logo">
                        <img src={Logo} width="150" alt="" />
                    </div>
                    <div className="login__content__header">
                        <span className='text-xl font-bold'>ورود</span>
                        <span className='line'></span>
                        <span className='text-xl font-bold'>ثبت نام</span>

                    </div>
                    <div className="login__content__body">
                        <span>سلام</span>
                        <Input />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage ;
