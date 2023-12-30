//  =================== styles ================== //
import { FolderAdd, Send2 } from 'iconsax-react';
import './style.scss'

// ======================== imports ==================== //
import React from 'react' ;


const Input = ({type = 'login' , text="متن خود را وارد کنید" }) => {
    return (
        <>  
            <div className={type }>
                <span className='icon'><FolderAdd  /> </span>
                <input type="text" placeholder={text} />
                <span className='icon'> <Send2 /> </span>
            </div>
        </>
    )
}

export default Input