import axios from "axios";
import Cookies from "js-cookie";

const  REACT_USER_BASE_URL =' http://192.168.1.129:9582/api/user'
const Api = axios.create({
  baseURL: REACT_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  

  },
});

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let _user = Cookies.get('user');
    if(_user) _user = JSON.parse(_user);
    if(_user?.token) config.headers.Authorization = `Bearer ${_user?.token} `;
    return config;
  },
  function (error) {
    // Do something with request error
    alert("err");
    return Promise.reject(error);
  }
);

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // alert("err when sending request");

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default Api;