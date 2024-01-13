//  =================== style  ================ //

import "./style.scss";
import {
  Add,
  AddSquare,
  DocumentUpload,
  SearchNormal1,
  Send2,
  Trash,
} from "iconsax-react";
import Header from "../../components/particials/header";
//  ================= imports =============== //
import React, { useCallback, useEffect, useState } from "react";
import CardChat from "../../components/card-chat";
import Avatar from "../../components/avatar";
import MessageBoxChat from "../../components/chat-box";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import Api from "../../libs/axios";
import webSocket, { websocket } from "../../store/socket.js";
import { useParams, useSearchParams } from "react-router-dom";

import useChat from "./hooks/chat.js";
import login from "../../pages/auth/login/index.jsx";
import { ToastContainer } from "react-toastify";
import { loginUser } from "../../store/user.js";
import { checkUser } from "../../store/auth.js";
import HeaderChat from "../../components/chat-box/components/header/index.jsx";
import ConversactionList from "../../components/chat-box/components/coversection-list/index.jsx";
import ContentChat from "../../components/chat-box/components/chat-content/index.jsx";
//  ================ components ============== //
const Chat = () => {
  // starts
  const [searchParam] = useSearchParams();
  const [selectedImages, setSelectedImages] = useState([]);
  const [input, setinput] = useState("");
  const [page, setPage] = useState(1);

  const [searchinput, setSearchinput] = useState();
  const [uploadTextChat, setUploadTextChat] = useState([]);
  const [loader, setLoader] = useState(false);
  const [conversaction, setConversaction] = useState([]);
  const [messageText, setMessageText] = useState([]);
  const [chatdiv, setChatdiv] = useState([]);
  const dispatch = useDispatch();
  const { sendmessage, websoket, scrollToButton } = useChat();
  const [status, setStatus] = useState(0);
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
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // remove image uploader
  let removeImage = (key) => {
    const _images = selectedImages.filter((s, i) => i != key);
    setSelectedImages(_images);
  };

  // scrolto down
  const infiniteScroll = async () => {
    let chat = document.getElementById("chat__content__body__chat");
    // console.log(chat);
    if (chat.scrollTop === 0) {
      setPage(page + 1);
      // console.log("ssdsd " ,page);
      const { data } = await Api.get(
        `/conversations/${searchParam.get("id")}?page=${page}`
      );
      if (data.data.rows <= 0) {
        setPage(page - 1);
      } else {
        setMessageText([...data.data.rows, ...messageText]);
        chat.scrollTop(200);
      }
    }
  };

  // handlesubmit
  const handleSubmit = async () => {
    console.log("xsssxssxsxs");
    sendmessage(input);
    websoket.on("conversation/new-message-sent", (data) => {
      console.log("assassaas", data);
      setMessageText([...messageText, data]);
    });
    scrollToButton();
    setinput("");
  };

  const message = async (page) => {
    // console.log( 'mohammad------------------->>', page);
    try {
      const { data } = await Api.get(
        `/conversations/${searchParam.get("id")}?page=1`
      );
      setStatus(data.data.LSID);
      setMessageText(data.data.rows.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  // addmenu

  const handleUpload = async () => {
    const form = new FormData();
    selectedImages.forEach((f) => {
      form.append("files", f);
    });

    form.append("key", searchParam.get("id"));
    form.append("caption", uploadTextChat);

    try {
      const { data } = await Api.post("conversation-messages/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      setMessageText([...messageText, data.data.msg]);
      scrollToButton();
      console.log(messageText);
    } catch (e) {
      console.log(e);
    }
  };
  //  =================== use Effect ===============  //
  useEffect(() => {
    conversactionList();
    message();
  }, [searchParam.get("id")]);

  useEffect(() => {
    dispatch(websocket());
    dispatch(checkUser());
    setChatdiv(document.getElementsByClassName("chat__content__body__chat"));
    scrollToButton();
    message();
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
      <Header />
      <div className="chat">
        <div className="chat__content">
          <ConversactionList conversaction={conversaction} />
          <div className="chat__content__body">
            <ContentChat />
            <div
              className="chat__content__body__chat"
              id="chat__content__body__chat"
              onScroll={infiniteScroll}
            >
              {messageText.map((item, key) => {
                {
                }
                return (
                  <MessageBoxChat
                    key={key}
                    classname={`${
                      item.adviser_answer
                        ? "message__box__clint"
                        : "message__box__user"
                    }`}
                    messege={item.body}
                    type={item.type}
                    file={item.attachments}
                    status={item.id <= status}
                  />
                );
              })}
            </div>
            {/* <Input type="chat_input" /> */}
            <form className="form-chat" onSubmit={handleSubmit}>
              <div {...getRootProps()}>
                <input
                  {...getInputProps()}
                  type="file"
                  multiple
                  accept="image/*"
                />
                {isDragActive ? (
                  <div className="drop__zone__box">
                    <AddSquare size={50} color="#ccc" />
                    فایل خود را اینجا قرار دهید
                  </div>
                ) : (
                  <DocumentUpload />
                )}
              </div>
              <input
                type="text"
                className="input-chat"
                onChange={(e) => setinput(e.target.value)}
                value={input}
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
                        <p>{image.size}kB</p>
                      </div>
                      <button
                        onClick={() => removeImage(index)}
                        className="btn-submit"
                      >
                        <Trash />
                      </button>
                    </div>
                  );
                })}
                <input
                  type="text"
                  className="outline-0 border-1 bg-amber-50 box__upload__input "
                  name="caption"
                  placeholder={"متن خود را وارد کنید"}
                  onChange={(e) => setUploadTextChat(e.target.value)}
                />
                <button
                  type="button"
                  className="btn-submit"
                  onClick={handleUpload}
                >
                  ارسال
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
