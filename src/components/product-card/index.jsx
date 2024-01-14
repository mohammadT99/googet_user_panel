
import './style.scss' ;
import React from 'react';
import ProductImage from '../../assets/image/image-product.png'
import { Add, Trash } from 'iconsax-react';


const CardProduct = () => {
    return (
        <>
            <div className="card__product shadow hover:shadow-lg hover:border-orange-500">
                <div className="card__img">
                    <img src={ProductImage} alt="" />
                </div>
                <div className="card__title">
                    <h1 className='text-md font-medium'>گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4  گیگابایت - ویتنام</h1>
                </div>
                <div className="card__price">
                    <p className='text-green-600 font-medium text-sm'>
                        10000
                        <span > ريال</span>
                    </p>
                </div>
                <div className="card__buttons flex gap-3 items-center">
                    <button className=' flex hover:bg-gray-300 p-2 rounded-md bg-gray-200 items-center'> 
                    <span>
                    <Trash />
                    </span>
                    حذف</button>
                    <button className=' flex bg-orange-500 text-white p-2 rounded-md item-center'>
                    <span>
                        <Add />
                    </span>
                     افزودن به سبد خرید</button>
                </div>
            </div>
        </>
    )
}

export default CardProduct ;