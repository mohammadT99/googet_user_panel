import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
import socketReduser from './socket' ;
import authReduser from  './auth'
import { SocketSlice } from "./socket";
export const Store = configureStore({
    reducer: {
      users: usersReducer,
      socket: socketReduser,
      auth : authReduser
    },
  });
  
