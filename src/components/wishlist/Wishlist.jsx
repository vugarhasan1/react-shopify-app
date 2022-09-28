import React from 'react'
import './wishlist.scss';
import { TbHeartOff } from 'react-icons/tb'


const Wishlist = () => {
    return (
        <div className='wishlist'>

            <div className="wishlist__empty">
                <div className="tbHeart">
                    <TbHeartOff />
                </div>
                <p className="text">
                    Wishlist is empty
                </p>
            </div>
        </div>
    )
}

export default Wishlist