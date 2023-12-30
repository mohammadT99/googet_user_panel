import Avatar from '../avatar';
import './style.scss' ;

// =================  import s ======= //

import React from 'react';


const MessageBoxChat = ({messege = 'سلام' , type = 'message__box__user' , time="10:00" , user ='سارا' }) => {
    return (
        <>
            <div className={type}>
                <div className="user">
                {type === 'message__box__clint' ? <Avatar type='avatar_chat' textsize='14px' /> : null}
                </div>
                <div className="content">
                    <div className="content__body">
                    {type === 'message__box__clint' ? <p className='text-orange-300'>{user}</p> :null }
                    <div className="text_box">
                    <p>{messege}</p>
                    <span className='text-sm text-gray-300'>{time}</span>
                    </div>
                    </div>
                    <div className="status">
                    </div>
                </div>
            </div>
        </>
    )
}
export default MessageBoxChat ; 