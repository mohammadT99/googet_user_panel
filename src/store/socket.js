import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Socket, io } from "socket.io-client";
import { Manager } from "socket.io-client";

export const SocketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  },

  reducers: {
    websocket: (state  ) => {
        let t = Cookies.get("user")
        t = JSON.parse(t)
        const ip = "http://192.168.1.129:9582/users" ;
       const _socket= io(ip , {
        secure: false,
        extraHeaders: {
          token: t.token,
        },
      });

      _socket.on("error" , (data) => {
        console.log(data)
      });

      _socket.on("connect" , () => {
        console.log("connected")
      })
      state.socket = _socket ;

    },
  },
});
export const { websocket } = SocketSlice.actions;
export default SocketSlice.reducer;
