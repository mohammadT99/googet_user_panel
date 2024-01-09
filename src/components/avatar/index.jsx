import './style.scss' ;

import React from 'react';
import avatarUser from  '../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png' ;

const Avatar = ({type = 'user' , src='' , address= '' , textsize = '', size = '50px' , borderColor = '--primary' ,confirmed = '' , title ='محمد' , subtitle ,}) => {
    
    return (
          <div className={type}>
            <img src={src} className={`${type} w-32 rounded-full`} style={{width : size}} alt="" />
            <h1 className='avatar__title' style={{fontSize : textsize }}>{title}</h1>
          </div>  
    )
}

export default Avatar ;