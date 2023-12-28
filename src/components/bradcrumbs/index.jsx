//  ================= styles =============== //
import { ArrowLeft2 } from 'iconsax-react';
import './style.scss';

//  ================ imports ============ //
 import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcumbs = ({bradcrumb = "خانه"  , key ="" , to ="" , active ="active"}) => {
    return (
        <>
            <div className="breadcrumbs">
            <NavLink className={active} to={to} key={key}>{bradcrumb}</NavLink>
                <span className={active}><ArrowLeft2 size="20" /></span>
            </div>
        </>
    )
}

export default Breadcumbs; 