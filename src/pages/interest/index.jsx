import React, { useEffect, useState } from "react";
import "./style.scss";
import CardProduct from "../../components/product-card";
import Breadcumbs from "../../components/bradcrumbs";
import Filter from "../../components/filter";
import { useSearchParams } from "react-router-dom";
import image1 from "../../assets/image/b0214f645db64a9c4b13a042da0136100a82d9a1_1676199654.webp";
import image2 from "../../assets/image/58310e6f1f7829712ac07237cf5eddbcc24b6288_1690788174.webp";

import image3 from "../../assets/image/b3d660fd6a3946de6f822dc28455af8a9e22cd67_1691477390.webp";
import image4 from "../../assets/image/7841ddef0065fde2ddb88edd8757dfc62a10c52e_1689779953.webp";
import Api from "../../libs/axios";
import { ToastContainer, toast } from "react-toastify";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const Interest = () => {
  const [searchParam, setSerchParam] = useSearchParams();
  const [input, setInput] = useState("");
  const filterPage = () => {
    console.log("sdsdsd");
    try {
      const { data } = Api.get(`/auth/?${searchParam.get("filter")}`);
      console.log("mohhamdasdsd666", data);
    } catch (e) {
      console.log("moahhad----->>>>gfg", e);
      toast.error("notapi", e);
    }
  };

  const debonse = useDebouncedCallback(() => {
    console.log('api------------->>serch')

  } , 1000) 

  const handleSerch =(e) => {
    console.log("text");
    setInput(e.target.value);
    setSerchParam({
      search : input
    })
    debonse()
  };

  useEffect(() => {
    filterPage();
  }, [searchParam.get("filter")]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Breadcumbs bradcrumb=" علاقه مندی ها" active="active-bread" />
      <div className="recent__visit__content gap-x-20 items-center mb-3">
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
        <div className="  header-filter flex justify-end  ">

          <input
            className="input-filter outline-0 h-10 mx-auto mt-2 mb-2  rounded-lg border border-gray-400 px-3"
            placeholder="جستجو"
            onChange={handleSerch}
          />
        </div>
      </div>
      <div className=" sm:row-span-12 md:row-span-6 auto-rows-auto row-span-7 recent__visit__body mt-4 flex gap-2 ">
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
          image={image3}
        />
        <CardProduct
          title="کیس کامپیوتر کوگر مدل CONQUER 2"
          price="۱۸,۳۷۰,۰۰۰"
          image={image4}
        />
        <CardProduct />
      </div>
    </>
  );
};

export default Interest;
