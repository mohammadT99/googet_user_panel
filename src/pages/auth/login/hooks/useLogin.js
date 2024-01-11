import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "../../../../libs/axios";
import { render } from "react-dom";
import { Check } from "iconsax-react";
import { data } from "autoprefixer";
import { loginUser } from "../../../../store/user";
import Cookies from "js-cookie";

 export  function useLogin (props) {
    const dispatch = useDispatch();
    const navigate = useNavigate() ;
    const [ loading , setLoading ] = useState(false)
    // const [ input , setInput ] = useState('');
    const [ inputData , setinputData] = useState([]);
    const [codeLogin  , setCodeLogin ] = useState('')
    const mobile = localStorage.getItem('code')
    const loginData = async (input ) => {
        console.log('fdfdfdf')
        setinputData(input)
        try {
            const {data}  = await Api.post('/auth' , {
                mobile: input ,
            })
            console.log(data.code)
            setCodeLogin(data.code)
            navigate(data.redirect)
        }catch(e) {
            console.log(e);
        }
       
    }
   
    const check = async (code) => {
        console.log(mobile)
       try{
        const {data} =  await Api.post('/check' , {
            mobile :JSON.parse(mobile) ,
            token :  code ,
            type : 'otp'
        })
        console.log(data)
        dispatch(loginUser(data));
        navigate('/');

       }catch(e){
        console.log(e)
       }
       
       
    }

    const password =  async(password) => {
        try {
            const {data} = await Api.post('/check' , {
                mobile :JSON.parse(mobile) ,
                password : password,
                type  : 'password'
            })
            dispatch(loginUser(data));
            if(Cookies.get('user')) {
                navigate('/')
            }
        }catch(e) {
            console.log(e)
        }
    }
   return {
    // setInput ,
    loginData ,
    check,
    inputData,
    password


   }
}

export default useLogin ;