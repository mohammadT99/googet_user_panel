import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
// import { socketReduser } from "./socket";
export const Store = configureStore({
    reducer : {
        users : usersReducer ,
        // socket : socketReduser ,
    },
});