//  ================= styles =============== //
import { ArrowLeft2, Home } from 'iconsax-react';
import './style.scss';

//  ================ imports ============ //
 import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcumbs = ({bradcrumb = "خانه"  , key ="" , to ="" , active ="active"}) => {
 
    return (
        <>
            <div className="breadcrumbs mb-5 ">
            <NavLink to='/' key={key}><Home size="20" color='var(--light-4)' /></NavLink>
                <span ><ArrowLeft2 size="20" /></span>
            <NavLink className={active} to={to} key={key}>{bradcrumb}</NavLink>
            </div>
        </>
    )
}

export default Breadcumbs; 