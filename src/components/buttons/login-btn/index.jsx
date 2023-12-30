//================ style =========== //
// import { Login } from 'iconsax-react';
import { Login } from 'iconsax-react';
import './style.scss' ;
import React from 'react';

const LoginButton = ({type = 'login' , icon }) => {
    return (
        <>  
            <button className={type}>
                <span>{icon}</span>
                <span>ورود</span>
            </button>
        </>
    )
}

export default LoginButton ;
