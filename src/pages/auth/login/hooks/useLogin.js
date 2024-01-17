import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "../../../../libs/axios";
import { render } from "react-dom";
import { Check } from "iconsax-react";
import { data } from "autoprefixer";
import { loginUser } from "../../../../store/user";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

 export  function useLogin (props) {
    const dispatch = useDispatch();
    const navigate = useNavigate() ;
    const [ loading , setLoading ] = useState(false)
    // const [ input , setInput ] = useState('');
    const [ inputData , setinputData] = useState([]);
    const [codeLogin  , setCodeLogin ] = useState('')
    const mobile = localStorage.getItem('code')
    const [err , setErr ] =  useState('');
    const [passerr , setPasserr] = useState(null)
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
        const _user = Cookies.get("user")
        try {
            const {data} = await Api.post('/check' , {
                mobile :JSON.parse(mobile) ,
                password : password,
                type  : 'password'
            })
            console.log('datas-------------->>' , data)
            dispatch(loginUser(data));
            if(Cookies.get('user')) {
                navigate('/')
            } else if(_user.token) {
                navigate('/')
            }else{
                location.replace('/login')
            }
        }catch(e) {
            toast.error(e.response.data.errors.password)
            setPasserr(e.response.data.errors.password)
        }
    }
   return {
    // setInput ,
    loginData ,
    check,
    inputData,
    password,
    passerr


   }
}

export default useLogin ;