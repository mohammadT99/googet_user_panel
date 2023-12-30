import './style.scss' ;

import React from 'react';
import avatarUser from  '../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png' ;

const Avatar = ({type = 'user' , address= '' , textsize = '', size = '50px' , borderColor = '--primary' ,confirmed = '' , title =' ' , subtitle ,}) => {
    
    return (
          <div className={type}>
            <img src={avatarUser} className={type} style={{width : size}} alt="" />
            <h1 className='avatar__title' style={{fontSize : textsize }}>{title}</h1>
          </div>  
    )
}

export default Avatar ;