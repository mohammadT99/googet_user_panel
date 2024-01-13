import { Add, SearchNormal1 } from "iconsax-react";
import React from "react";

const HeaderChat  = () => {
    return (
        <div className="chat__content__meassege__header">
        <h1 className="text-lg font-bold flex-nowrap">پیام ها</h1>
        <div className="header__menue">
          <button className="icon add">
            <Add />
          </button>
          <form className="form-search">
            <span className="icon">
              <SearchNormal1 size="20" />
            </span>
           
          </form>
        </div>
      </div>
    )
}

export default HeaderChat ; 