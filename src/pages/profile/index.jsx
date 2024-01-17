import React, { useEffect, useState } from "react";
import Avatar from "../../components/avatar";
import Api from "../../libs/axios";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import { ToastContainer } from "react-toastify";
import Input from "../../components/forms/inputs";
import { useDispatch } from "react-redux";
import { checkUser } from "../../store/auth";
import Breadcumbs from "../../components/bradcrumbs";

const Profile = () => {
  // state
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState([]);
  const [updateImage, setUpdateImage] = useState([]);
  const [lodading, setLoading] = useState(false);
  const [loadingbtn, setLoadingbtn] = useState(false);
  const dispatch = useDispatch()
  const [update, setUpdate] = useState({
    name: userData.name,
    mobile: userData.mobile,
    email: userData.email,
  });
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNeawPass] = useState("");




  // var token = JSON.parse(Cookies.get("user"));
  // token = token.user;


  // function  update data user 
  const user = async () => {
    try {
      const { data } = await Api.get("profile");
      setLoading(true);
      setUserData({
        mobile: data.data.mobile,
        email: data.data.email,
        name: data.data.full_name,
      });
      setUpdate({
        mobile: data.data.mobile,
        email: data.data.email,
        name: data.data.full_name,
        avatar: data.data.avatar,
      });
    } catch (e) {
      console.log(e);
    }
  };
  // console.log( 'userdata', userData) ;
  // button  update data user
  const handleUpdate = async () => {
    try {
      setLoadingbtn(true);
      const { data } = await Api.post("profile", update);
      setLoadingbtn(false);
    } catch (e) {
      console.log(e);
    }
  };


  // handle image uploder in profile 
  const handleimagedubmit = async (e) => {
    console.log("dfdfdfdf");
    setImage(URL.createObjectURL(e.target.files[0]));
    setUpdate({
      avatar: image,
    });
    
    console.log("ssss", updateImage);
    if (image) {
      const { data } = await Api.post(
        "profile/avatar",
        { avatar: e.target.files[0], type: "set" },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      user()
    }
    
  };

//  function update  password  

  const handleUpdatePass = async () => {
    const {data} = await Api.post("profile/password" ,{
        new_password : newPass ,
        current_password : oldPass 
    }
    ) ;

  }

  console.log("sdjskd", update);
  //   use efect
  useEffect(() => {
    dispatch(checkUser());
    user();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Breadcumbs bradcrumb="پروفایل" active="active-bread"/>
      {lodading ? (
        <div className="Profile__content">
          <h1 className="flex  items-center gap-1.5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#F36C3B" />
              </svg>
            </span>
            اطلاعات عمومی
          </h1>
          <div className="profile__content__forms">
            <form className="form-control">
              <div className="input">
                <label className="label-input" htmlFor="input-name">
                  نام
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form"
                  value={update.name}
                  onChange={(e) => setUpdate({ name: e.target.value })}
                />
              </div>
              <div className="input">
                <label className="label-input" htmlFor="input-name">
                  نام
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form"
                  value={update.name}
                  onChange={(e) => setUpdate({ name: e.target.value })}
                />
              </div>
            </form>
            <div className="avatar__box">
              <Avatar
                src={`http://192.168.1.129:9582${update.avatar}`}
                type="profile"
                size="150px"
                textsize="24"
                title={userData.name}
              />
              <div className="input__avatr">
                <label htmlFor="avatar__input">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M34.2501 18.542C41.7501 19.1878 44.8126 23.042 44.8126 31.4795V31.7503C44.8126 41.0628 41.0834 44.792 31.7709 44.792H18.2084C8.89591 44.792 5.16675 41.0628 5.16675 31.7503V31.4795C5.16675 23.1045 8.18758 19.2503 15.5626 18.5628M25.0001 4.16699V31.0003"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M31.9791 26.3545L24.9999 33.3337L18.0208 26.3545"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </label>
                <span>عکس خود را اپلود کنید</span>
                <input
                  type="file"
                  name="file"
                  id={"avatar__input"}
                  onChange={handleimagedubmit}
                />
              </div>
            </div>
          </div>
          <h1 className="flex  items-center gap-1.5 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#F36C3B" />
              </svg>
            </span>
            اطلاعات تماس
          </h1>
          <div className="profile__content__forms">
            <form className="form-control justify-start">
              <div className="input ">
                <label className="label-input" htmlFor="input-name">
                  پست الکترونیکی *
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form  email"
                  value={update.email}
                  onChange={(e) => setUpdate({ name: e.target.value })}
                />
              </div>
              <div className="input">
                <label className="label-input" htmlFor="input-name">
                  شماره تماس
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form email"
                  value={update.mobile}
                  onChange={(e) => setUpdate({ name: e.target.value })}
                />
              </div>
            </form>
          </div>
          <h1 className="flex  items-center gap-1.5 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#F36C3B" />
              </svg>
            </span>
            امنیت
          </h1>
          <div className="profile__content__forms">
            <form className="form-control justify-start">
              <div className="input ">
                <label className="label-input" htmlFor="input-name">
                  رمز قبلی
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form  email"
                  onChange={(e) => setOldPass(e.target.value)}
                />
              </div>
              <div className="input">
                <label className="label-input" htmlFor="input-name">
                  رمز جدید
                </label>
                <input
                  id="input-name"
                  type="text "
                  className="input-form email"
                  onChange={(e) => setNeawPass(e.target.value)}
                />
              </div>
            </form>
            <button className="btn-profile items-end mt-24  text-nowrap " onClick={handleUpdatePass}>
              {" "}
              بروزرسانی رمزعبور
            </button>
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className=" btn-profile text-darck hover:text-white   font-medium rounded-lg text-sm py-0.5   inline-flex items-center justify-center mx-auto "
          >
            {loadingbtn ? (
              <span>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-orange-50 animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#aaa"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                بروزرسانی
              </span>
            ) : (
              <span>بروزرسانی</span>
            )}
          </button>
          {/* <button>صرفن</button> */}
        </div>
      ) : (
        <div role="status" className={"loader"}>
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Profile;
