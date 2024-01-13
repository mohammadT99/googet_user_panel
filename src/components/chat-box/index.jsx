import Avatar from "../avatar";
import "./style.scss";
import image from "../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png";

// =================  import s ======= //

import React, { useState } from "react";
import { Eye } from "iconsax-react";

const MessageBoxChat = ({
  messege = "",
  classname = "message__box__user",
  type = "",
  time = "10:00",
  user = "سارا",
  file = [],
  status,
  id,
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
                  {file.map((item, key) => {
                    return (
                      <div className="p-2">
                        <div className={`show__image ${taggle}`}>
                          <img
                            src={`http://192.168.1.129:9582/${item.url}`}
                            alt=""
                          />
                        </div>
                        {item.mime === file ? (
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H13V17L13 16.9384C12.9999 16.2843 12.9999 15.6965 13.0638 15.2208C13.1337 14.7015 13.2958 14.1687 13.7322 13.7322C14.1687 13.2958 14.7015 13.1337 15.2208 13.0638C15.6966 12.9999 16.2843 12.9999 16.9384 13L17 13H22V5C22 3.34315 20.6569 2 19 2H5ZM21.7305 15H17C16.2646 15 15.8137 15.0021 15.4873 15.046C15.2005 15.0846 15.1526 15.1394 15.1469 15.1459L15.1464 15.1464L15.1459 15.1469C15.1394 15.1526 15.0846 15.2005 15.046 15.4873C15.0021 15.8137 15 16.2646 15 17V21.7305C15.324 21.5831 15.6222 21.3778 15.8787 21.1213L21.1213 15.8787C21.3778 15.6222 21.5831 15.324 21.7305 15Z"
                                fill="red"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H13V17L13 16.9384C12.9999 16.2843 12.9999 15.6965 13.0638 15.2208C13.1337 14.7015 13.2958 14.1687 13.7322 13.7322C14.1687 13.2958 14.7015 13.1337 15.2208 13.0638C15.6966 12.9999 16.2843 12.9999 16.9384 13L17 13H22V5C22 3.34315 20.6569 2 19 2H5ZM21.7305 15H17C16.2646 15 15.8137 15.0021 15.4873 15.046C15.2005 15.0846 15.1526 15.1394 15.1469 15.1459L15.1464 15.1464L15.1459 15.1469C15.1394 15.1526 15.0846 15.2005 15.046 15.4873C15.0021 15.8137 15 16.2646 15 17V21.7305C15.324 21.5831 15.6222 21.3778 15.8787 21.1213L21.1213 15.8787C21.3778 15.6222 21.5831 15.324 21.7305 15Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        ) : (
                          <img
                          src={`http://192.168.1.129:9582/${item.url}`}
                          alt=""
                        />
                        )}
                        <p className="text-sm text-gray-400 mt-2 ">{`size: ${item.sizeInKB}`}</p>
                        <span className="show_image" onClick={showImage}>
                          <Eye color="#aaa" />
                        </span>
                        <p>{item.body}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="caption">{messege}</p>
              </div>
            )}
          </div>
          {status ? (
            <div className="status flex gap-2 mt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13"
                  viewBox="0 0 22 13"
                  fill="none"
                >
                  <path
                    d="M7 8L11.2277 11.3821C11.6556 11.7245 12.2793 11.6586 12.6263 11.2345L21 1"
                    stroke="#008000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.1893 7.23681L14.774 1.63327C15.1237 1.20582 15.0607 0.5758 14.6333 0.226073C14.2059 -0.123655 13.5758 -0.0606525 13.2261 0.366792L8.65279 5.95639L10.1893 7.23681ZM7.02298 11.1068L5.48647 9.82634L4.83315 10.6248L1.60006 8.20003C1.15823 7.86866 0.531429 7.9582 0.200058 8.40003C-0.131312 8.84186 -0.0417688 9.46866 0.400059 9.80003L3.63315 12.2248C4.49053 12.8679 5.7024 12.7208 6.38106 11.8913L7.02298 11.1068Z"
                    fill="#008000"
                    fill-opacity="0.7"
                  />
                </svg>
              </span>
              <span className="text-sm text-gray-500">{time}</span>
            </div>
          ) : (
            <div className="status-not-seen flex gap-2 mt-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="12"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <path
                    d="M1 9L4.23309 11.4248C4.66178 11.7463 5.26772 11.6728 5.60705 11.2581L14 1"
                    stroke="green"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span className="text-sm text-gray-500">{time}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MessageBoxChat;
