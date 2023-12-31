import Avatar from "../avatar";
import "./style.scss";

// =================  import s ======= //

import React from "react";

const MessageBoxChat = ({
  messege = "سلام",
  type = "message__box__user",
  time = "10:00",
  user = "سارا",
}) => {
  return (
    <>
      <div className={type}>
        <div className="user">
          {type === "message__box__clint" ? (
            <Avatar type="avatar_chat" textsize="14px" />
          ) : null}
        </div>
        <div className="content">
          <div className="content__body">
            {type === "message__box__clint" ? (
              <p className="text-orange-300">{user}</p>
            ) : null}
            <div className="text_box">
              <p>{messege}</p>
              <span className="text-sm text-gray-300">{time}</span>
            </div>
          </div>
          <div className="status">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default MessageBoxChat;
