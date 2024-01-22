import { AddSquare } from "iconsax-react";
import React from "react"; 
import Avatar from "../../../avatar";


const ContentChat = ({onclick}) => {

    const addmenu = () => {
        const conver = document.getElementsByClassName(".chat__content__meassege ");
        console.log( 'list--->> ' , conver)
        conver.classList.add("chat__content__meassege__open ");
      }; 

    return (
        <>
            <div className="chat__content__body__header">
              <Avatar type="avatar_chat" size="60px" title="سارا" />
              <a className="menue__chat" onClick={onclick}>
                <AddSquare />
              </a>
            </div>
        </>
    )
}
export default ContentChat ; 