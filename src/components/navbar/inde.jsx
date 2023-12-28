//  ==================== import style ================= //
import './style.scss' ;

//  ================= imports  ============== //
import React from 'react';
import { Badge, Button, Dropdown, Indicator, Navbar } from 'react-daisyui';
import { NavLink } from 'react-router-dom';

const NavbarSections = ({title ="rrrr"  , key ="1",  link ="/"} ) => {
return (
    <>  
        <NavLink to={link}>
            <div className="text" key={key+10}>{title}</div>
        </NavLink>
    </>

)
}
export default NavbarSections ;
