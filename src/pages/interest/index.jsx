import React from "react"; 
import './style.scss'
import CardProduct from "../../components/product-card";


const Interest  = () => {
    return (
        <>  
        <div className="recent__visit__content">
        <h1 className="flex items-center gap-3 text-lg font-semibold">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <circle cx="7.5" cy="8" r="7.5" fill="#E57C23" />
            </svg>
          </span>
          لیست علاقه مندی ها 
        </h1>
      </div>
      <div className=" sm:row-span-12 auto-rows-auto row-span-7 recent__visit__body mt-4 flex gap-2 ">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
    )
}


export default Interest  ;