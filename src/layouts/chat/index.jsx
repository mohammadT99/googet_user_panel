//  =================== style  ================ //

import { Add, More, SearchNormal1 } from "iconsax-react";
import Header from "../../components/particials/header";
import Sidebar from "../../components/particials/sidebar";
import SideabarMin from "../../components/particials/sidebar/sidebar-min";
import "./style.scss";
//  ================= imports =============== //
import React from "react";
import CardChat from "../../components/card-chat";
import Avatar from "../../components/avatar";
import Input from "../../components/forms/inputs";
import MessageBoxChat from "../../components/chat-box";
// import { Avatar } from "react-daisyui";

//  ================ components ============== //
const Chat = () => {
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
                <button className="btn">  جدید ترین ها</button>
            </div>
                <CardChat type="card_chat" />
                <CardChat type="card_chat" />
                <CardChat type="card_chat" />
                <CardChat type="card_chat" />
                <CardChat type="card_chat" />
          </div>
          <div className="chat__content__body">
            <div className="chat__content__body__header">
            <Avatar type="avatar_chat" size="60px" title='سارا'/>
            </div>
            <div className="chat__content__body__chat">
                <MessageBoxChat type="message__box__clint" />
                <MessageBoxChat type="message__box__clint" />
                <MessageBoxChat type="message__box__user" />
                <Input type="chat_input" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
