import { DocumentFilter } from "iconsax-react";
import { Input } from "postcss";
import React from "react"; 
import FilterPrice from "./components/filter-price";


const Filter = () => {
    return (
        <>  
            <div className="filter__icon flex gap-2 items-center sm:p-0 whitespace-nowrap " style={{marginBlock: "20px"}}>
                <DocumentFilter size='20' color="var(--border-3)" />
                <p className="text-gray-500 text-sm">فیلتر ها:</p>
                <FilterPrice />
            </div>
        </>
    )
}

export default Filter ; 