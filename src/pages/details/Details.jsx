
import React, { useEffect } from 'react'
import './details.scss';
import { Link, useParams} from 'react-router-dom';
import { addToCart } from '../../features/cart/cartSlice';
import { products } from '../../data/products';
import { BiStar } from "react-icons/bi";
import { useDispatch } from 'react-redux';


const Details = () => {

  // const { cartItems, cartTotalAmount} = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()
  const product = products.find(item => item.id === Number(id))
  // const { image, title, price, description } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }


  return (
    <section id='details'>
      <div className="product-title-home">
        <Link to='/' style={{ color: '#666666' }}>Home</Link> / <span>{product.title}</span>
      </div>
      <div className="main-details">
        <div className="left-img">
          <div className="image">
            <img src={product.image} alt="img" />
          </div>
        </div>
        <div className="right-info">
          <p className="title">{product.title}</p>
          <div className="spans">
            <span className="stars">
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </span> /
            <span className="no-reviews">No reviews</span> /
            <span>Write a review</span>
          </div>
          <div className="discount">Discount: $10.00 (5%)</div>
          <p className="price">
            ${product.price}
          </p>

          <div className="desc">
            {product.description}
          </div>

          <div className="btn">
            <button onClick={()=>handleAddToCart(product)}>{product.available=== false ? "OUT OF STOCKS " : "ADD TO CARD"}</button>
          </div>
        </div>
      </div>


       


    </section>
  )
}

export default Details