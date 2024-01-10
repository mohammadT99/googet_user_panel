import Avatar from "../avatar";
import "./style.scss";
import image from "../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png";

// =================  import s ======= //

import React, { useState } from "react";
import { Eye } from "iconsax-react";

const MessageBoxChat = ({
  messege = "سلام",
  classname = "message__box__user",
  type = "",
  time = "10:00",
  user = "سارا",
  file,
}) => {
  const [taggle, setTaggle] = useState("");
  const showImage = () => {
    document.getElementsByClassName("show__image");
    if (taggle) {
      setTaggle("");
    } else {
      setTaggle("display");
    }
  };
  return (
    <>
        <>

            <div className={classname}>
                <div className="user">
                    {classname === "message__box__clint" ? (
                        <Avatar type="avatar_chat" textsize="14px" />
                    ) : null}
                </div>
                <div className="content">
                    <div className="content__body">
                        {classname === "message__box__clint" ? (
                            <p className="text-orange-300">{user}</p>
                        ) : null}
                        {type === "text" ? (
                            <div className="text_box">
                                <p>{messege}</p>
                            </div>
                        ) : (
                            <div className="messeges__box__text__file">
                                <div className="image__box">
                                    {file.map((item , key ) => {
                                       return (
                                           <div>
                                               <div className={`show__image ${taggle}`}>
                                                   <img src={`http://192.168.1.129:9582/${item.url}`} alt=""/>
                                               </div>
                                               <img
                                                   src={`http://192.168.1.129:9582/${item.url}`}
                                                   alt=""
                                               />
                                               <span className="show_image" onClick={showImage}>
                          <Eye color="#aaa"/>
                        </span>
                                               <p>{item.mime}</p>
                                           </div>
                                       )
                                    })}
                                </div>
                                <p className="caption">{messege}</p>
                            </div>
                        )}
                    </div>
                    <div className="status flex gap-2">
                  <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 7 7"
                        fill="none"
                    >
                      <g clip-path="url(#clip0_201_16677)">
                        <path
                            d="M0.243774 3.83822L1.79595 5.3904L2.18747 4.99611L0.638067 3.44671L0.243774 3.83822ZM6.30532 1.66406L3.36757 4.60459L2.21246 3.44671L1.81539 3.83822L3.36757 5.3904L6.69962 2.05835L6.30532 1.66406ZM5.128 2.05835L4.73649 1.66406L2.97328 3.42727L3.36757 3.81879L5.128 2.05835Z"
                            fill="green"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_201_16677">
                          <rect
                              width="6.6641"
                              height="6.6641"
                              fill="white"
                              transform="translate(0.130005 0.114258)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                        <span className="text-sm text-gray-500">{time}</span>
                    </div>
                </div>
            </div>
        </>
      {/*{file.map((item, key) => {*/}
      {/*  return (*/}

      {/*  );*/}
      {/*})}*/}
    </>
  );
};
export default MessageBoxChat;
