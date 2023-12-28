//================ style =========== //
// import { Login } from 'iconsax-react';
import { Login } from 'iconsax-react';
import './style.scss' ;
import React from 'react';

const LoginButton = () => {
    return (
        <>  
            <div className="boutton__login">
                <Login />
                <span>ورود</span>
            </div>
        </>
    )
}

export default LoginButton ;
