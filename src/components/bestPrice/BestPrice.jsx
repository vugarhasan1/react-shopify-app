import React from 'react'
import './bestPrice.scss';
import { super_laptop, headphone1, headphone2 } from '../../assets/index';



const BestPrice = () => {
    return (
        <section id='best__price'>
            <div className="thePrices container">
                <div className="pricePhoto discount">
                    <div className="image_text">
                        <img src={headphone1} alt="" />
                    </div>
                    <div className="h3_p">
                        <h3>
                            Intelligent <br />
                            New Touch Control
                        </h3>
                        <p>Discount 20% On Products</p>
                    </div>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>

                </div>
                <div className="pricePhoto limited">
                    <div className="image_text">
                        <img src={headphone2} alt="" />
                    </div>
                    <div className="h3_p">
                        <h3>On-Sale <br />
                            Best Prices Headphone
                        </h3>
                        <p>Limited Time: Online Only!</p>
                    </div>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                </div>
                <div className="pricePhoto freeShipping">
                    <div className="image_text">
                        <img src={super_laptop} alt="" />
                    </div>
                    <div className="h3_p">
                        <h3>Hot Sale <br />
                            Super Laptops 2022
                        </h3>
                        <p>Free Shipping All Order</p>
                    </div>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                </div>
            </div>
        </section>
    )
}

export default BestPrice