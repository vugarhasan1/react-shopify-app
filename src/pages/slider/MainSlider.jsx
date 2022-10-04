import React, { useState } from 'react'
import './mainSlider.scss';
import Slider from "react-slick";
import { addToCart } from '../../features/cart/cartSlice';
import { addToWish } from '../../features/wishlist/wishSlice';
import { products } from '../../data/products';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiLayer, BiShow, BiHeart, BiX, BiStar } from 'react-icons/bi'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const MainSlider = () => {

  const [view, setView] = useState(false);
  // const [wish, setWish] = useState(false);
  const [data, setData] = useState(products);

  // const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();




  // handleAddToCart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate("/")
  }

  // handleShow()
  const handleShow = (id) => {
    setView(!view);
    const product = products.find((item) => item.id === id);
    setData(product)
    // alert(id)
  }

  const handleClose = () => {
    setView(!view)
  }

  ///handleWishlist
  const handleAddToWish = (product) => {
    dispatch(addToWish(product))
    console.log(product);
  }





  // carusel
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <main id='mainSlider'>
      <div className="products__slider">
        <Slider {...settings} className='slider'>
          {
            products.map((product, index) => (
              <Card className='card' key={index} >
                <Typography className='card-image'>
                  <CardMedia
                    component="img"
                    image={product.image}
                  />
                </Typography>
                <CardContent className='card-content'>
                  <Typography component="div" className='card-title' >
                    {product.title}

                  </Typography>
                  <Typography className='card-start'>
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                  </Typography>
                  <Typography>
                    <span className='normal-price'>${product.price}</span>
                    <span className='sale'><del>{product.sale}</del></span>
                  </Typography>

                  <span className='redLine'></span>
                  <div className="sold-available">
                    <span className="sold">Sold: 85</span>
                    <span className="available" >Available: 15</span>
                  </div>
                  <Button className='btn-card' onClick={() => handleAddToCart(product)} disabled={product.available === false}>
                    {product.available === false ? "OUT OF STOCKS" : "ADD TO CARD"}
                  </Button>
                </CardContent>
                <div className="icons">
                  <div className="show icon bishow" onClick={() => handleShow(product.id)} ><BiShow /></div>
                  <div className="compare icon bilayer" ><BiLayer /></div>
                  <div
                    className='wishlist icon biheart'
                    onClick={() => handleAddToWish(product)}>
                    <BiHeart/>
                  </div>
                </div>
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


                <Link className="card-overlay" to={`/products/${product.id}`}> </Link>
              </Card>
            ))
          }
        </Slider>
      </div>

      <div className={view ? 'viewPopUp show' : 'viewPopUp'}>
        <div className="content">
          <div className="product-info">
            <div className="left-img">
              <div className="image">
                <img src={data.image} alt="img" />
              </div>
            </div>
            <div className="right-info">
              <p className="title">{data.title}</p>
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
                {data.price}
              </p>

              <div className="desc">
                {data.description}
              </div>

              <div className="btn">
                <button onClick={() => handleAddToCart(data)}>{data.price === '210.00' ? "OUT OF STOCKS " : "ADD TO CARD"}</button>
              </div>
            </div>
          </div>
          <div className="close-popUp" onClick={() => handleClose(setView(!view))}>
            <BiX className='bix' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSlider