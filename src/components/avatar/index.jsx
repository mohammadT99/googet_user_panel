import './style.scss' ;

import React from 'react';
import avatarUser from  '../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png' ;

const Avatar = ({type = 'user' , address= '' , size = '50px' , borderColor = '--primary' ,confirmed = '' , title =' سارا رجبی' , subtitle ,}) => {
    
    return (
          <div className="avatar">
            <img src={avatarUser} className={type} style={{width : size}} alt="" />
            <h1 className='avatar__title'>{title}</h1>
          </div>  
    )
}

export default Avatar ;