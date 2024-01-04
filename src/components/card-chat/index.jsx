// ====================  import styles and logo  ===================== //
import Avatar from '../avatar';
import './style.scss'
//  =============== imports  =============== //

import React from "react";

const CardChat = ({title = '' , message = 'سلام' , type =' active' , time="10:00"  , key }) => {
    return (
        <>
        <div className="card__chat" key={key}>
            <div className="card__hader">
            <Avatar type='avatar_chat' size='40px' textsize='16px' title='سارا '  />
            <div className="time text-orange-300">{time}</div>
            </div>
            <div className="messeges"><span className='text-orange-500 mx-2'>شما:</span>{message}</div>
        </div>
        </>
    )
}

export default CardChat ; 
