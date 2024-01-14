import './style.scss' ;
import ImageCard from '../../assets/image/image-product.png'
import { Edit2, More, Trash } from 'iconsax-react';
// imports



const CardComment = ({title = 'عالی'}) => {

        const menu = () => {
            let _menue = document.getElementById('menu')
            console.log( 'sjhdsd------------->>' , _menue)
            _menue.classList.toggle("d-flex")
            
            
        }
    return (
        <>
            <div className="card__comments">
                <div className="header__card">
                    <div className="image__header">
                        <img src={ImageCard} alt="" />
                        <p className='text-lg font-medium'>{title}</p>
                    </div>
                    <div className="buttons__card">
                    <div className="status__card shadow">
                        <span className='text-orange-600 text-nowrap text-xs '>درحال بررسی</span>
                    </div>
                    <span className='line'></span>
                    <div className="more__card" id='more__card' onClick={menu} >
                    <More />
                    </div>
                    <div className="menu__content shadow  " id='menu' onMouseOut={menu}>
                        <span className='flex gap-3 items-center hover:bg-orange-50 rounded-sm px-3 hover:shadow hover:text-orange-500' >
                            <Edit2 size={16} />
                            ویرایش
                        </span>
                        <span className='flex gap-3 items-center hover:bg-orange-50 rounded-sm px-3 hover:shadow hover:text-orange-500' >
                            <Trash size={16} />
                            حذف
                        </span>
                    </div>
                </div>
                </div>
                <div className="card__body flex items-center gap-5">
                <span className='bg-green-500 text-sm p-3 rounded-md text-white font-medium'>3</span>
                <p className='font-normal '>این گوشی یک گوشی میانرده و عالی برای کار های روزمره می باشد</p>
                </div>
            </div>
        </>
    )
}


export default CardComment ;

