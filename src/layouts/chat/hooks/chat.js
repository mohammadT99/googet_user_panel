// imports

// import { Socket } from "socket.io";
import { io } from "socket.io-client";
import webSocket from "../../../../socket";
import Cookies from "js-cookie";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// import webSocket from "../../../../socket";

const useChat = () => {
  // states
  const [dataChat, setDataChat] = useState();
  const [messageData, setMessageData] = useState("");
  const [searchParam] = useSearchParams();
  // const socket = webSocket();
  // hook  chat

  var t = Cookies.get("user");
  t = JSON.parse(t)
  // t= t.token
  console.log( 'token', t.token);
  const socket = io("http://192.168.1.129:9582/users", {
    secure: false,
    extraHeaders: {
      token: t.token,
    },
  });

  socket.on("error" , (data) => {
    console.log(data)
  })


  // socket.on("conversation/new-message-sent", (data) => {
  //   console.log("ddd", data);
  //   setMessageData(data) ;

  // });

  const socketClient = () => {
    // receive  data from server
    socket.on("conversation/list", (data) => {
      // console.log("sdsdsd");
      setDataChat(data.data);
      console.log(" lll", dataChat);
      localStorage.setItem("data", JSON.stringify(data.data));
    });

    // send data form server
    socket.emit("conversation/list", (data) => {
      console.log(data);
    });
  };
  // send messa
  const getAllMessage = (message) => {
    try {
      socket.emit("conversation/message/add", {
        msg: message,
        conversation_key: searchParam.get("id"),
      });
      console.log("message :", message);
     
    } catch (e) {
      console.log(e);
    }
    // console.log("data", data);
  };

  //   resive data form chat page
  const chatMessage = (message) => {
    // console.log(message);
    if (message) {
      getAllMessage(message);
      // console.log("message :", messageData);
    } else {
      console.log("not");
    }
  };

  // reaturn method function
  return {
    socketClient,
    chatMessage,
    getAllMessage,
    messageData,
    socket
  };
};

export default useChat;
