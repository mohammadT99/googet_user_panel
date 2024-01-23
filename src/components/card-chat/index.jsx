// ====================  import styles and logo  ===================== //
import { NavLink, useSearchParams } from "react-router-dom";
import Avatar from "../avatar";
import "./style.scss";
//  =============== imports  =============== //

import React, { useState } from "react";
import { useQueryParam } from "use-query-params";

const CardChat = ({
  title = 'ali' ,
  message = " yesss" ,
  type = " active",
  time,
  id,
}) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const addToguery = () => {
    setSearchParam({ id: id});
  };
  return (
    <>
      <div onClick={addToguery} className="card__chat" {...props}>
        <div className="card__hader">
          <Avatar
            type="avatar_chat"
            size="40px"
            textsize="16px"
            title={title}
          />
          <div className="time text-orange-300">{time}</div>
        </div>
        <div className="messeges">
          <span className="text-orange-500 mx-2">شما:</span>
          {message}
        </div>
      </div>
    </>
  );
};

export default CardChat;
