import React from 'react'
import './cart.scss';
import { cart_image } from '../../assets';
import { Link } from 'react-router-dom';
import { BiX } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem, increase, decrease} from '../../features/cart/cartSlice';

const Cart = () => {

    const { cartItems, cartTotalAmount} = useSelector((store) => store.cart);
    const dispatch = useDispatch();





    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    const increaseItem = (item) => {
        dispatch(increase(item))
    }

    const decreaseItem = (item) => {
        dispatch(decrease(item))
    }

    const clearAllItems = () => {
        dispatch(clearCart())
    }


    return (
        <main id='cart'>

            <div className="cart__image">
                <img src={cart_image} alt="cart" />
                <div className="overlay"></div>
                <ul className='cart_ul'>
                    <h2>Cart</h2>
                    <li><Link to='/' className='home'>Home</Link></li>
                    <li><Link to='/cart' className='before'>Cart</Link></li>
                </ul>
            </div>

            {
                cartItems < 1 ?
                    (
                        <div className="empty__cart">

                            <h2>Your Cart Is Empty.</h2>
                            <Link className='empty-cart' to='/'>CONTINUE SHOPPING</Link>

                        </div>
                    )

                    :
                    (
                        <div className="cart__info container">
                            <div className="product__info">
                                <div className="capter-line1">
                                    <p className="product">PRODUCT</p>
                                    <p className="price">PRICE</p>
                                    <p className="quantity">QUANTITY</p>
                                    <p className="total">TOTAL</p>
                                </div>
                                {
                                    cartItems.map((item, index) => (
                                        <div className="cart-items-list" key={index}>
                                            <div className="item-image-title">
                                                <div className="remove-item" onClick={() => handleRemoveItem(item)}><BiX /></div>
                                                <div className="item-img">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <p className="item-title">{item.title}</p>
                                            </div>
                                            <p className="item-price">${item.price}</p>
                                            <div className="item-quantity">
                                                <button onClick={() => decreaseItem(item)}>-</button>
                                                <span>{item.cartQuantitiy}</span>
                                                <button onClick={() => increaseItem(item)}>+</button>
                                            </div>
                                            <p className="item-tottal-price">${(item.price * item.cartQuantitiy).toFixed(2)}</p>

                                        </div>
                                    ))
                                }


                                <div className="items-buttons">
                                    <div className="left-btns">
                                        <Link to='/' className='btn-left'>CONTINUE SHOPPING</Link>
                                        <button className='btn-left' onClick={() => clearAllItems()}>CLEAR SHOPPING CART</button>
                                    </div>
                                    <div className="right-btn">
                                        <button>UPDATE CART</button>
                                    </div>
                                </div>


                            </div>

                            <div className="cart__totals">
                                <h3 className='totals'>Cart totals</h3>
                                <div className="sub-total">
                                    <p>Subtotal:</p>
                                    <span className="sub-total-price">${cartTotalAmount}</span>
                                </div>
                                <div className="total">
                                    <p>Total:</p>
                                    <span className="total-price">${cartTotalAmount}</span>
                                </div>
                                <span className="taxes">Taxes and shipping calculated at checkout</span>
                            </div>
                        </div>
                    )
            }








        </main>
    )
}

export default Cart














