
import React from "react"; 
import { useParams, useSearchParams } from "react-router-dom";
import HeaderChat from "../header";
import CardChat from "../../../card-chat";
import './style.scss' ;


const ConversactionList = ({conversaction , className}) => {
    const searchParam = useSearchParams()
    // const param =  ;

    const handeleresponsive = () => {
        if(window.innerWidth  === 320) {
            console.log('yes')
        }
    }
    return (
        <div className={`chat__content__meassege ${className}`}>
            <HeaderChat />
            <div className="chat__content__meassege__filter">
              <button className="btn">همه پیام ها</button>
              <button className="btn"> جدید ترین ها</button>
            </div>
            {Array.isArray(conversaction)
              ? conversaction.map((item, key) => {
                  {
                    /* console.log(key); */
                  }
                  return (
                    <div
                      key={key}
                      // onClick={activeBox(key)}

                      className={`${
                        searchParam == item.c_key
                          ? "link-card-active"
                          : "link-card"
                      }`}
                    >
                      <CardChat
                        type="card_chat"
                        title={item.shop_name}
                        message={item.last_message}
                        id={item.c_key}
                        onClick={handeleresponsive}
                      />
                    </div>
                  );
                })
              : "هیچ دیتایی یافت نشد...|"}
          </div>
    )
}

export default ConversactionList ;