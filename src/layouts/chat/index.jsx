//  =================== style  ================ //

import { Add, CloudFog, LoginCurve, More, SearchNormal1, Trash } from "iconsax-react";
import Header from "../../components/particials/header";
import Sidebar from "../../components/particials/sidebar";
import SideabarMin from "../../components/particials/sidebar/sidebar-min";
import "./style.scss";
//  ================= imports =============== //
import React, { useCallback, useEffect, useState } from "react";
import CardChat from "../../components/card-chat";
import Avatar from "../../components/avatar";
import Input from "../../components/forms/inputs";
import MessageBoxChat from "../../components/chat-box";
import { useDropzone } from "react-dropzone";
import { Socket, io } from "socket.io-client";
import Cookies from "js-cookie";
import { Form } from "react-daisyui";
import { useDispatch } from "react-redux";
import useChat from "./hooks/chat";
import webSocket from "../../../socket";

//  ================ components ============== //
const Chat = (props) => {

  // starts
  const [selectedImages, setSelectedImages] = useState([]);
  const [input, setinput] = useState("");
  const {socketClient , chatMessage  } = useChat() ;
  const [conversaction , setConversaction] = useState(JSON.parse(localStorage.getItem('data')))
  console.log( 'hddfhdfd', conversaction.data);

  // dropzone
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  // remove image uploader
  let removeImage = (key) => {
    const _images = selectedImages.filter((s, i) => i != key);
    setSelectedImages(_images);
  };

// handlesubmit
const handleSubmit = () => {
  chatMessage(input);
}

  //  =================== use Effect ===============  //
  useEffect ( () => {
    socketClient()
  } , [])

  return (
    <>
      <Header />
      <div className="chat">
        <div className="chat__content">
          <div className="chat__content__meassege">
            <div className="chat__content__meassege__header">
              <h1 className="text-lg font-bold">پیام ها</h1>
              <div className="header__menue">
                <span className="icon add">
                  <Add />
                </span>
                <span className="icon">
                  <SearchNormal1 size="20" />
                </span>
              </div>
            </div>
            <div className="chat__content__meassege__filter">
              <button className="btn">همه پیام ها </button>
              <button className="btn"> جدید ترین ها</button>
            </div>
            {conversaction.map((item , key) => {
              return(
                <CardChat type="card_chat" title={item.adviser_answer}  key={key}/>
              )
            })}

          </div>
          <div className="chat__content__body">
            <div className="chat__content__body__header">
              <Avatar type="avatar_chat" size="60px" title="سارا" />
            </div>
            <div className="chat__content__body__chat">
              <MessageBoxChat type="message__box__clint" />
              <MessageBoxChat type="message__box__clint" />
              <MessageBoxChat type="message__box__user" />
            </div>
            {/* <Input type="chat_input" /> */}
            <form className="form-chat">
              <input
                type="text"
                className="input-chat"
                onChange={(e) => setinput(e.target.value)}
              />
              <button type="button" onClick={handleSubmit}>send</button>
            </form>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="">
                  <span className="icon-upload">
                    <LoginCurve /> اینجا رحا کنید
                  </span>
                </div>
              ) : (
                <p>برای ارسال فایل درگ کنید</p>
              )}
            </div>
            {selectedImages.length > 0 && (
              <div className="box">
                {selectedImages.map((image, index) => {
                  return (
                    <div className="image">
                      <img
                        src={`${URL.createObjectURL(image)}`}
                        width={80}
                        key={index}
                        alt=""
                      />
                      <div className="image-box">
                        <p>{image.path}</p>
                        <p>{image.size}</p>
                      </div>
                      <button
                        onClick={() => removeImage(index)}
                        className="btn-submit"
                      >
                        {" "}
                        <Trash />
                      </button>
                    </div>
                  );
                })}
                <button  className="btn-submit"> ارسال</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
