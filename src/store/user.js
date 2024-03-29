import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies  from "js-cookie";



export const UserSlice = createSlice(
    {
        name: "user" ,
        initialState : {
            user :true ,
            authCheckLogin : false ,
            loginLoading: false, 
            logoutLoading : false ,
        } , 
        reducers : {
            loginUser : ( state, userData) => {
                console.log('jjj');
                state.user = userData ;
                Cookies.set("user" , JSON.stringify(userData.payload) , {expires :365})
            }
        }
    }
   
)
export const { loginUser } = UserSlice.actions;
export default UserSlice.reducer;

