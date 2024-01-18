import React from "react";
import CardProduct from "../../components/product-card";
import "./style.scss";
import Breadcumbs from "../../components/bradcrumbs";
import Filter from "../../components/filter";
import image1 from "../../assets/image/b0214f645db64a9c4b13a042da0136100a82d9a1_1676199654.webp";
import image2 from "../../assets/image/58310e6f1f7829712ac07237cf5eddbcc24b6288_1690788174.webp";

import image3 from "../../assets/image/b3d660fd6a3946de6f822dc28455af8a9e22cd67_1691477390.webp";
import image4 from "../../assets/image/7841ddef0065fde2ddb88edd8757dfc62a10c52e_1689779953.webp";
const RecentVisit = () => {
  return (
    <>
      <Breadcumbs bradcrumb=" سوابق بازدید" active="active-bread" />
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
          سوابق بازدید
        </h1>
        <div className=" header-filter sm:flex-col md:flex-row  flex flex-row justify-between  ">
        <Filter />
        <input className="input-filter outline-0 h-10 mx-16  rounded-lg border border-gray-400 px-3"  placeholder="جستجو" />
        </div>
      </div>
      <div className="recent__visit__body mt-4 flex gap-2 ">
        <CardProduct
          title="لپ تاپ 16 اینچی ایسوس مدل ROG Strix G16 G614JV-AS73 "
          price="۳۱,۴۹۹,۰۰۰"
          image={image1}
        />
        <CardProduct
          title="گوشی موبایل شیائومی مدل Redmi 12 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت به همراه شارژر - گلوبال"
          price="۳۱,۴۹۹,۰۰۰"
          image={image2}
        />
        <CardProduct
          title="گوشی موبایل ناتینگ مدل Phone 2 دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت"
          price="۳۱,۴۹۹,۰۰۰"
          image={image3 }
        />
        <CardProduct title="کیس کامپیوتر کوگر مدل CONQUER 2" price="۱۸,۳۷۰,۰۰۰" image={image4} />
        <CardProduct />
      </div>
    </>
  );
};

export default RecentVisit;
