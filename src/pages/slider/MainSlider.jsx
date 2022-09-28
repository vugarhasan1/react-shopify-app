import React, { useState } from 'react'
import './mainSlider.scss';
import Slider from "react-slick";
import { addToCart } from '../../features/cart/cartSlice';
import { products } from '../../data/products';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiLayer, BiShow, BiHeart, BiX } from 'react-icons/bi'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const MainSlider = () => {

  const [view, setView] = useState(false);

  const { cartItems } = useSelector((store) => store.cart)
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // handleAddToCart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/")
  }

  const handleShow = (id) => {
    navigate(`/products/${id}`)
    setView(!view);

  }
  const handleClose = () => {
    setView(!view)
  }

  return (
    <main id='mainSlider'>

      <div className="products__slider">
        <Slider {...settings} className='slider'>
          {
            products.map((product, index) => (
              <Card className='card' key={index} >
                <Typography >
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
                    {product.star}
                  </Typography>
                  <Typography>{product.price}</Typography>
                  <span className='redLine'></span>
                  <div className="sold-available">
                    <span className="sold">Sold: 85</span>
                    <span className="available" >Available: 15</span>
                  </div>
                  <Button className='btn-card' onClick={() => handleAddToCart(product)} disabled={product.price === '123.00'}>
                    {product.price === '210.00' ? "OUT OF STOCKS" : "ADD TO CARD"}
                  </Button>
                </CardContent>
                <div className="icons">
                  <div className="show icon bishow" onClick={() => handleShow(index)} ><BiShow /></div>
                  <div className="compare icon bilayer" ><BiLayer /></div>
                  <div className="wishlist icon biheart" ><BiHeart /></div>
                </div>
                <Link className="card-overlay" to={`/products/${product.id}`}> </Link>
              </Card>
            ))
          }
        </Slider>
      </div>
      <div className={view ? 'viewPopUp show' : 'viewPopUp'}>
        <div className="content">
          <div className="product-info">
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