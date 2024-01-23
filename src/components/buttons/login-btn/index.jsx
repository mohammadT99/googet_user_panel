//================ style =========== //
// import { Login } from 'iconsax-react';
import { Login } from 'iconsax-react';
import './style.scss' ;
import React from 'react';
import {NavLink} from "react-router-dom";

const LoginButton = ({  type = '', icon}) => {
    return (
        <>  
            <NavLink  className={type} >
                <span>{icon}</span>
                <span>ورود</span>
            </NavLink>
        </>
    )
}

export default LoginButton ;
