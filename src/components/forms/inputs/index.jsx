//  =================== styles ================== //
import './style.scss'

// ======================== imports ==================== //
import React from 'react' ;


const Input = ({type = 'login' }) => {
    return (
        <>
            <input type="text" className={type} />
        </>
    )
}

export default Input