import React from "react";
import "./style.scss";
import useFilter from "../../hooks/filter";
import { useSearchParams } from "react-router-dom";
import { CloudFog } from "iconsax-react";

const FilterPrice = () => {
  const { addToQuery } = useFilter();
  const [serchParam, setSerchParam] = useSearchParams();
  const handleModule = (filter) => {
    console.log("sdsdsd----..sdsds..>>");
    addToQuery(filter);
  };
  return (
    <>
     <div className="filters sm:flex flex-wrap gap-2">
     <button
        type="button"
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 transition-all"
        onClick={() => handleModule("lowPrice")}
      >
        {" "}
        کمترین قیمت
      </button>
      <button
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 transition-all"
        onClick={() => handleModule("maxPrice")}
      >
        {" "}
        بیشترین قیمت
      </button>
      <button
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 hover:shadow transition-all"
        onClick={() => handleModule("brand")}
      >
        برند{" "}
      </button>
      <button
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 hover:shadow transition-all"
        onClick={() => handleModule("newest")}
      >
        تازه ترین ها{" "}
      </button>
      <button
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 hover:shadow transition-all"
        onClick={() => handleModule("oldproduct")}
      >
        قدیمی ترین{" "}
      </button>
      <button
        className="bg-gray-100 text-sm px-2 rounded-md text-gray-700 hover:text-orange-600 hover:shadow transition-all"
        onClick={() => handleModule("bestseler")}
      >
        پرفروش{" "}
      </button>
     </div>
      {/* 
        | ------------------------------------ 
        | box filter  daynnamic filters 
        --------------------------------------
         */}
    </>
  );
};

export default FilterPrice;
