// imports

// import { Socket } from "socket.io";
import {io} from "socket.io-client";
import webSocket from "../../../../socket";
import Cookies from "js-cookie";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {data} from "autoprefixer";

export const useChat = () => {

    const websoket = useSelector((state) => state.socket.socket)
    const [searchParam] = useSearchParams();
    const [messageData, setMessageData] = useState([]);
    const [messageText, setMessageText] = useState([]);
    const sendmessage = (message) => {
        console.log( 'ssss', message)
        websoket.emit("conversation/message/add", {
            msg: message,
            conversation_key: searchParam.get('id'),
        })

        // websoket.on("conversation/new-message-sent", (data) => {
        //     console.log("assassaas", data);
        //     setMessageText([...messageText, data]);
        //   });

    };
    const scrollToButton = () => {
        let div = document.getElementById("chat__content__body__chat");
        div.scrollTop = div.scrollHeight;
      }; 
        return {
            sendmessage,
            websoket ,
            scrollToButton
        };
    };

    export default useChat;
