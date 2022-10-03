import React from 'react'
import './shoppingList.scss';
import { BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { cart_empty } from '../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increase, decrease} from '../../features/cart/cartSlice';



const ShoppingList = () => {

    const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch();


    const handleRemoveItem=(item)=>{
    dispatch(removeItem(item))
    }

    const handleDec=(item)=>{
        dispatch(decrease(item))
    }

    const handleInc=(item)=>{
        dispatch(increase(item))
    }


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
                                                    <button onClick={()=>handleDec(item)}>-</button>
                                                    <span>{item.cartQuantitiy}</span>
                                                    <button onClick={()=>handleInc(item)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="remove-item">
                                            <BiX className='bix' onClick={()=>handleRemoveItem(item)}/>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className="check-list-cart container">
                                <div className="totalAmount">
                                    <p className="total">Total</p>
                                    <p className="amount">$0</p>
                                </div>
                                <div className="view-cart-btn">
                                    <Link to='/cart' className='btnViewCart button'>VIEW CART</Link>
                                </div>
                                <div className="check-out-btn">
                                    <button className='btnCheckout button'>CHECK OUT</button>
                                </div>

                            </div>
                        </div>

                    )
            }


        </section>
    )
}

export default ShoppingList