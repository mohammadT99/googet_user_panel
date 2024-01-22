import {ArrowDown2, DocumentFilter} from "iconsax-react";
import { Input } from "postcss";
import './style.scss';
import React from "react"; 
import FilterPrice from "./components/filter-price";


const Filter = () => {

    const handleFilterBox = () => {
        const filterBox = document.getElementById('filterBox')
        filterBox.classList.toggle('close')
    }
    return (
        <>  
            <div className="filter__icon flex gap-2 items-center sm:p-0 whitespace-nowrap " style={{marginBlock: "20px"}}>
                <DocumentFilter size='20' color="var(--border-3)" />
                <p className="text-gray-500 text-sm">فیلتر ها</p>
                <span className="sm:flex md:flex lg:hidden" onClick={handleFilterBox}>
                    <ArrowDown2 size="16" color='gray'/>
                </span>
                <span className='filter__item'>
                    <FilterPrice />
                </span>


                <div className="box__filter" id="filterBox">
                    <FilterPrice />
                </div>
            </div>
        </>
    )
}

export default Filter ; 