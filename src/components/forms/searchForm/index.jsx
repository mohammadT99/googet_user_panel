// ==================== styles ============= //
import './style.scss'

//  ======================= imports =============== /
import React from 'react' ;
import { SearchNormal1 } from 'iconsax-react';

const SearchForm = () => {
    return (
        <>
           <div className="search">
            <input type="text" id='input' placeholder='جستجو کنید'  />
                <button type='button'>
                    <SearchNormal1 />
                </button>
           </div>
        </>
    )
}

export default SearchForm ;
