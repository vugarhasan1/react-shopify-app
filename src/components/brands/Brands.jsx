import React from 'react';
import './brands.scss';
import Slider from "react-slick";
import {brand1, brand2, brand3, brand4, brand5, brand6} from '../../assets/index'


const Brands = () => {





    const customSettings = {
        dots: false,
        infinite: false,
        arrows: true,
        arrowsClass: 'arrowsBrand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <section id='brands'>
            <div className="slider-brands">
                <Slider {...customSettings} className='slider container'>
                    <div>
                        <img src={brand1} alt="" />
                    </div>
                    <div>
                        <img src={brand2} alt="" />
                    </div>
                    <div>
                        <img src={brand3} alt="" />
                    </div>
                    <div>
                        <img src={brand4} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt="" />
                    </div>
                    <div>
                        <img src={brand6} alt="" />
                    </div>
                    <div>
                        <img src={brand5} alt="" />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Brands