import React from 'react'
import './shoppingList.scss';
import { BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { cart_empty } from '../../assets';
import { useSelector } from 'react-redux';




const ShoppingList = () => {

    const { cartItems } = useSelector((state) => state.cart)

    return (
        <section id="shoppingList">
           
            {
                cartItems < 1 ?
                    (
                        <div className="empty__cart">
                            <div className="image">
                                <img src={cart_empty} alt="" />
                            </div>
                            <p>Your cart is empty</p>

                            <Link to='/' className='return'>
                               Return To Shop
                            </Link>
                        </div>

                    ) :
                    (
                        <div className='shop-products-list '>
                            {
                                cartItems.map((item, index) => (
                                    <div key={index} className='products-card'>
                                        <div className="card-img">
                                            <img src={item.image} alt="" />
                                        </div>

                                        <div className="pro-title-price">
                                            <Link to='/cart' className="title">{item.title}</Link>
                                            <div className="price__btns">
                                                <div className="price">${item.price}</div>
                                                <div className="btns">
                                                    <button>-</button>
                                                    <span>0</span>
                                                    <button>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="remove-item">
                                            <BiX className='bix'/>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className="check-list-cart container">
                                <div className="totalAmount">
                                    <p className="total">Total</p>
                                    <p className="amount">$0.00</p>
                                </div>
                                <div className="view-cart-btn">
                                    <Link to='/cart' className='btnViewCart'>VIEW CART</Link>
                                </div>
                                <div className="check-out-btn">
                                    <button className='btnCheckout'>CHECK OUT</button>
                                </div>

                            </div>
                        </div>

                    )
            }


        </section>
    )
}

export default ShoppingList