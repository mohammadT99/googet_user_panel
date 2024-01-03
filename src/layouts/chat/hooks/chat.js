// imports 
import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client";
import socket from "../../../store/socket";
import { Server } from "socket.io";



export const  useChat = () => {

   const socketChat = () => {
    var t = Cookies.get("user") ;
    t =JSON.parse(t)
    const socket = io("http://192.168.1.129:9582/users" , {
        secure:false ,
        extraHeaders :{
            token : t
        }
    });

    socket.on("connect" , (data) => console.log("connected" , data))
    
   }

   const sendMessage = (message) => {
    
   }

   return {
    socketChat ,
    sendMessage
   }
}

export default useChat ;