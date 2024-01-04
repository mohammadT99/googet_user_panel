// imports

// import { Socket } from "socket.io";
import { io } from "socket.io-client";
import webSocket from "../../../../socket";
import Cookies from "js-cookie";
import { useState } from "react";

// import webSocket from "../../../../socket";

const useChat = () => {
  // states
  const [dataChat, setDataChat] = useState();
  const [messageData, setMessageData] = useState("");
  const socket = webSocket();

  // hook  chat
  const socketClient = (message) => {
    // connetction in server
    var t = Cookies.get("user");
    t = JSON.parse(t);
    const socket = io("http://192.168.1.129:9582/users", {
      secure: false,
      extraHeaders: {
        token: t,
      },
    });

    // receive  data from server
    socket.on("conversation/list", (data) => {
      setDataChat(data);
      console.log(" lll", data.data);
      localStorage.setItem('data' , JSON.stringify(data.data) )
    });

    // send data form server
    socket.emit("conversation/list", (data) => {
      console.log(data);
    });
  };

  //   resive data form chat page
  const chatMessage = (meassage) => {
    console.log(meassage)
    if (meassage) {
      setMessageData(meassage);
        console.log( 'message :', messageData)
    } else {
      console.log("not");
    }
  };

  // reaturn method function
  return {
    socketClient,
    chatMessage,
  };
};

export default useChat;
