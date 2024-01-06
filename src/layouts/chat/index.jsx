//  =================== style  ================ //

import "./style.scss";
import {
  Add,
  CloudFog,
  DocumentUpload,
  LoginCurve,
  More,
  SearchNormal1,
  Send2,
  Trash,
} from "iconsax-react";
import Header from "../../components/particials/header";
import Sidebar from "../../components/particials/sidebar";
import SideabarMin from "../../components/particials/sidebar/sidebar-min";
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
import { NavLink, useParams } from "react-router-dom";

import Api from "../../libs/axios";

import { useSearchParams } from "react-router-dom";
import { QueryParams } from "use-query-params";
import { data } from "autoprefixer";

//  ================ components ============== //
const Chat = (props) => {
  // starts
  const [activatebox, setActivatebox] = useState(false);
  const [searchParam] = useSearchParams();
  const [activeId, setActiveId] = useState(searchParam.get("id"));
  const [selectedImages, setSelectedImages] = useState([]);
  const [input, setinput] = useState([]);
  const { socketClient, chatMessage, getAllMessage , messageData , socket  } = useChat();
  const [searchinput, setSearchinput] = useState();
  const [conversaction, setConversaction] = useState([]);
  const [messageText, setMessageText] = useState();

  // console.log("hddfhdfd", conversaction);

  socket.on('conversation/new-message-sent' , (data) => {
    console.log('ddfdfd' , data);
    setMessageText(messageText => [data , ...messageText])
  })

  const conversactionList = async () => {
    try {
      const { data } = await Api.get("/conversations");
      // console.log( 'oooo',data.data.data)
      setConversaction(data.data.data);
      // console.log('conver :' , conversaction);
    } catch (e) {
      console.log(e);
    }
  };
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
    chatMessage(input );
  };

  const serachfrom = () => {
    // console.log('fjdjfdf')
    setSearchinput(document.getElementsByClassName("input-search"));
  };

  const message = async () => {
    try {
      const { data } = await Api.get(
        `/conversations/${searchParam.get("id")}?page=1`,
      );
      console.log("data", data.data.rows);
      setMessageText(data.data.rows);
    } catch (e) {
      console.log(e);
    }
  };

  //  =================== use Effect ===============  //
  useEffect(() => {
    socketClient();
    conversactionList();
  }, []);

  useEffect(() => {
    message();
  }, [searchParam.get("id")]);

  // console.log()
  return (
    <>
      <Header />
      <div className="chat">
        <div className="chat__content">
          <div className="chat__content__meassege">
            <div className="chat__content__meassege__header">
              <h1 className="text-lg font-bold flex-nowrap">پیام ها</h1>
              <div className="header__menue">
                <button className="icon add">
                  <Add />
                </button>
                <form className="form-search">
                  <span className="icon" onClick={serachfrom}>
                    <SearchNormal1 size="20" />
                  </span>
                  <input
                    type="text"
                    className={`${
                      searchinput ? "input-search d-block" : "input-search"
                    }`}
                  />
                </form>
              </div>
            </div>
            <div className="chat__content__meassege__filter">
              <button className="btn">همه پیام ها </button>
              <button className="btn"> جدید ترین ها</button>
            </div>
            {Array.isArray(conversaction)
              ? conversaction.map((item, key) => {
                  {/* console.log(key); */}
                  return (
                    <div
                      key={key}
                      // onClick={activeBox(key)}

                      className={`${
                        searchParam.get("id") == item.c_key
                          ? "link-card-active"
                          : "link-card"
                      }`}
                    >
                      <CardChat
                        type="card_chat"
                        title={item.shop_name}
                        message={item.last_message}
                        id={item.c_key}
                      />
                    </div>
                  );
                })
              : "هیچ دیتایی یافت نشد...|"}
          </div>
          <div className="chat__content__body">
            <div className="chat__content__body__header">
              <Avatar type="avatar_chat" size="60px" title="سارا" />
            </div>
            <div className="chat__content__body__chat">
              {Array.isArray(messageText)
                ? messageText.map((item, key) => {
                    return (
                      <MessageBoxChat
                        type="message__box__clint"
                        messege={item.body}
                      />
                    );
                  })
                : "پیامی وجود ندارد"}
            </div>
            {/* <Input type="chat_input" /> */}
            <form className="form-chat">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className="">
                    <span className="icon-upload">
                      <LoginCurve /> اینجا رحا کنید
                    </span>
                  </div>
                ) : (
                  <DocumentUpload />
                )}
              </div>
              <input
                type="text"
                className="input-chat"
                onChange={(e) => setinput(e.target.value)}
                placeholder="متن پیام"
              />
              <button type="button" onClick={handleSubmit}>
                <Send2 />
              </button>
            </form>

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
                <button className="btn-submit"> ارسال</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
