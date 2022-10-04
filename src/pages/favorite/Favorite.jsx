import React from 'react'
import './favorite.scss';
import { Link } from 'react-router-dom';
import { TbHeartOff } from 'react-icons/tb'
import { BiStar, BiX, BiLayer } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { deleteWish } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';


const Favorite = () => {

    const wish = useSelector((state) => state.wish)
    // const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const removeFromWish = (product) => {
        dispatch(deleteWish(product))
    }



    return (
        <section id='favorite-list' className='container'>
            <span className="links">
                <Link to='/'>Home</Link>
                <span>Wishlist</span>
            </span>

            <div className="capter">
                Your Favourite Product
            </div>

            {
                wish.wishItems < 1 ?
                    (
                        <div className="wishlist__empty">
                            <div >
                                <TbHeartOff className='tbHeart' />
                            </div>
                            <p className="text">
                                Wishlist is empty
                            </p>
                        </div>
                    ) :

                    (
                        <div>
                            <div className="favorite-products">
                                {
                                    wish.wishItems.map((product, index) => (
                                        <div className="favorite-card">
                                            <div className="image">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div className="card-content">
                                                <p className="title">
                                                    {product.title}
                                                </p>
                                                <div className="stars">
                                                    <BiStar className='star' />
                                                    <BiStar className='star' />
                                                    <BiStar className='star' />
                                                    <BiStar className='star' />
                                                    <BiStar className='star' />
                                                </div>
                                                <p className="price">
                                                    ${product.price}
                                                </p>
                                            </div>

                                            <div className="icons">
                                                <div className="show icon bishow" onClick={() => removeFromWish(product)} ><BiX /></div>
                                                <div className="compare icon bilayer" ><BiLayer /></div>
                                            </div>

                                            <button className='btn-card' onClick={() => handleAddToCart(product)} disabled={product.available === false}>
                                                {product.available === false ? "OUT OF STOCKS" : "ADD TO CARD"}
                                            </button>

                                            <span className='status-hot'
                                                style={
                                                    product.status === 'hot'
                                                        ? { backgroundColor: 'red' }
                                                        : { backgroundColor: 'transparent' }
                                                }>
                                                {
                                                    product.status === 'hot' ? 'HOT' : ''
                                                }
                                            </span>

                                            <span className='status-new'
                                                style={
                                                    product.status === 'new'
                                                        ? { backgroundColor: '#5AAB19' }
                                                        : { backgroundColor: 'transparent' }
                                                }>
                                                {
                                                    product.status === 'new' ? 'NEW' : ''
                                                }
                                            </span>

                                            <span className='product-percent'
                                                style={
                                                    product.percent
                                                        ? { backgroundColor: '#5AAB19' }
                                                        : { backgroundColor: 'transparent' }
                                                }>
                                                {
                                                    product.percent ? `${product.percent}` : ''
                                                }
                                            </span>
                                            <div className="card-overlay">

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </section>
    )
}

export default Favorite