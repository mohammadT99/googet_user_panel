
import './style.scss' ;
import React from 'react';
import ProductImage from '../../assets/image/image-product.png'
import { Add, Trash } from 'iconsax-react';


const CardProduct = ({title ="گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4  گیگابایت - ویتنام" , price = "1000,000" , image = ProductImage}) => {
    return (
        <>
            <div className="card__product shadow hover:shadow-2xl hover:border-orange-500 transition-shadow">
                <div className="card__img">
                    <img src={image} alt="" />
                </div>
                <div className="card__title">
                    <h1 className='text-md font-medium'>{title}</h1>
                </div>
                <div className="card__price">
                    <p className='text-green-600 font-medium text-sm'>
                        {price}
                        <span > ريال</span>
                    </p>
                </div>
                <div className="card__buttons flex gap-5 items-center">
                    <button className=' flex hover:bg-gray-400 hover:text-white p-3 rounded-md bg-gray-200 items-center button '> 
                    <span>
                    <Trash />
                    </span>
                    حذف</button>
                    <button className=' button-card flex bg-orange-500 text-white p-3 rounded-md item-center'>
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