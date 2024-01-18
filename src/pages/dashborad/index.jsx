import { ToastContainer } from 'react-toastify';
import './style.scss' ;

//  ============= imports ============ //
import React from 'react';

const Dashboard = () => {
    return (
        <>
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
            <p>mmmm</p>  
        </>
    )
}

export default  Dashboard ;