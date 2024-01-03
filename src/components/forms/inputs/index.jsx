//  =================== styles ================== //
import { FolderAdd, Send2 } from 'iconsax-react';
import './style.scss'

// ======================== imports ==================== //
import React from 'react' ;


const Input = ({type = 'login' , text="متن خود را وارد کنید" , icon  , name = '' }) => {
    return (
        <>  
            <div className={type }>
                <button className='icon'><FolderAdd  /></button>
                <input type="text" name='' placeholder={text} onChange={(e) =>e.target.value } />
                <span className='icon'> <Send2 /> </span>
                
            </div>
        </>
    )
}

export default Input