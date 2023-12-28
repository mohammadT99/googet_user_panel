// ===================== style ============== //
import { Wallet } from 'iconsax-react';
import './style.scss';

// ============= imports ============ //
import React from 'react'; 

const Wallets = ({inventory= "1,0000"}) => {
    return (
        <> 
            <div className="wallets">
                <Wallet />
                <div className="wallets__inventory">
                    <p>{inventory}</p>
                    <p>ریال</p>
                </div>
            </div> 
        </>
    )
}
export default Wallets ; 