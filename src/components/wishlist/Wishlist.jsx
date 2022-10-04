import React from 'react'
import './wishlist.scss';
import { Link } from 'react-router-dom';
import { TbHeartOff } from 'react-icons/tb'
import { BiX } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWish } from '../../features/wishlist/wishSlice';



const Wishlist = () => {


    const wish = useSelector((state) => state.wish)
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(deleteWish(item))
    }


    return (
        <div id='wishlist'>

            {
                wish.wishItems < 1 ?
                    (
                        <div className="wishlist__empty">
                            <div className="tbHeart">
                                <TbHeartOff />
                            </div>
                            <p className="text">
                                Wishlist is empty
                            </p>
                        </div>
                    ) :


                    (
                        <div className='wish-products-list '>
                            {
                                wish.wishItems.map((item, index) => (
                                    <div key={index} className='products-card'>
                                        <div className="card-img">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <div className="pro-title-price">
                                            <Link to='/favorite' className="title">{item.title}</Link>
                                            <div className="price__btns">
                                                <div className="price">${item.price}</div>
                                            </div>
                                        </div>
                                        <div className="remove-item">
                                            <BiX className='bix' onClick={() => handleRemoveItem(item)} />
                                        </div>
                                    </div>
                                ))
                            }

                            <div className='go-favorite'>
                                <Link to='/favorite'>VIEW WISHLIST</Link>
                            </div>
                        </div>
                    )

            }
        </div>
    )
}

export default Wishlist