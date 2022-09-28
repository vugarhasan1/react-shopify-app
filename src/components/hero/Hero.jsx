import React from 'react'
import './hero.scss';
import Slider from 'react-slick';
import { slide1, slide2, slide3 } from '../../assets/index';



const Hero = () => {


    const customSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        dotsClass: "buttonsBar",
        arrows: false
    };


    return (
        <div id='hero'>
            <div className="conatiner">
                <Slider {...customSettings} className='slider'>
                    <div className='slid-camera mainSlider'>
                        <div className="slider-text">
                            <span className="hot-deal">NEW ARRIVALS</span>
                            <h3>SPORT EDITION</h3>
                            <h2>BEST CHOICE OF THE YEAR</h2>
                            <p className="info">Discount 20% On Products & Free Shipping</p>
                            <button className='btn-discover'>DISCOVER</button>
                        </div>
                        <div className="image">
                            <img src={slide1} alt="" />
                        </div>

                    </div>
                    <div className='slid-boot mainSlider'>
                        <div className="slider-text">
                            <span className="hot-deal">HOT DEAL</span>
                            <h3>SALE 30% OFF</h3>
                            <h2>FUTURED FOOTBALL BOOTS</h2>
                            <p className="info">Discount 30% On Products & Free Shipping</p>
                            <button className='btn-discover'>DISCOVER</button>
                        </div>
                        <div className="image">
                            <img src={slide2} alt="" />
                        </div>

                    </div>
                    <div className='slid-samsung mainSlider'>
                        <div className="slider-text">
                            <span className="hot-deal">HOT DEAL</span>
                            <h3>SALE 20% OFF</h3>
                            <h2>SAMSUNG GALAXY BUDS</h2>
                            <p className="info">Top Quality Earbuds & Accessories</p>
                            <button className='btn-discover'>DISCOVER</button>
                        </div>
                        <div className="image">
                            <img src={slide3} alt="" />
                        </div>

                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Hero