import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";



export const AuthSlice = createSlice({
    name : 'auth' ,
    initialState : {
        user : Cookies.get("user")
    } ,
    reducers : {
        checkUser : (state) => {
            let _user = Cookies.get("user")
            if(!_user) {
                location.replace('/login')
            }
            state.user = _user ;
        }
    }
})

export const {checkUser} = AuthSlice.actions ;
export default AuthSlice.reducer