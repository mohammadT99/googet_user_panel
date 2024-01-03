import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";


 export const SocketSlice = createSlice(
{
    name : "socket" ,
    initialState : {
        socket: true ,
    },
    reducers :{
       
    }
}

)


export const { socketIo } = SocketSlice.actions ;
export default SocketSlice.reducer ;