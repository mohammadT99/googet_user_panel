import { Add, SearchNormal1 } from "iconsax-react";
import React from "react";
import './style.scss'
import Avatar from "../../../avatar/index.jsx";
import avatarUser from  '../../../../assets/image/andriyko-podilnyk-jFAG_ixCrsM-unsplash.png' ;


const HeaderChat  = () => {

    const newChat = () => {
    const addNew = document.getElementById('add__new__chat')
        addNew.classList.toggle('flex')
    }
    return (
        <div className="chat__content__meassege__header">
        <h1 className="text-lg font-bold flex-nowrap">پیام ها</h1>
        <div className="header__menue">
          <button className="icon add" onClick={newChat}>
            <Add />
          </button>
          <form className="form-search">
            <span className="icon">
              <SearchNormal1 size="20" />
            </span>
           
          </form>
        </div>

            <div className="add__new__chat " id='add__new__chat'>
                <div className="add__new__chat__header">
                    <Add size='24px' className='icon-add-new' onClick={newChat} />
                    <h1 className='text-sm'>افزودن  چت جدید در بین فروشگاه ها</h1>
                </div>
                <div className="add__new__chat__conent">
                    <form className="form-control">
                        <input type="text" className='border border-gray-300 rounded mx-2 mt-3 h-8 text-xs px-2 focus:border-0  outline-1 outline-gray-200' placeholder='جستجوی فروشگاه' />
                        <div className="chat__shop">
                            <Avatar src={avatarUser} title={''} />
                            <h1 className={'mt-10'}>فروشگاه محمدی</h1>
                        </div>

                        <button className='bg-primary mx-auto w-60 py-1 rounded text-white mt-7'  >شروع چت</button>
                    </form>
                </div>
            </div>
      </div>
    )
}

export default HeaderChat ; 