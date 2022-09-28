import React from 'react'
import './accessories.scss';
import { accessories1, accessories2 } from '../../assets/index';


const Accessories = () => {
    return (
        <section className='container'>
            <div className="main-accessories">
                <div className="access-left wrapper">
                    <div className="image">
                        <img src={accessories1} alt="" />
                    </div>
                    <p className="context">
                        <p className="text-pro">Bestseller Products</p>
                        <p className="text-name">PC & Docking Station</p>
                        <div className="p-off">Discount 20% Off, Top Quality Products</div>
                    </p>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                </div>
                <div className="access-right wrapper">
                    <div className="image">
                        <img src={accessories2} alt="" />
                    </div>
                    <p className="context">
                        <p className="text-pro"> Featured Products</p>
                        <p className="text-name">Accessories IPhone</p>
                        <div className="p-off">Free Shipping All Order Over $99</div>
                    </p>
                    <span className='span1'></span>
                    <span className='span2'></span>
                    <span className='span3'></span>
                    <span className='span4'></span>
                </div>
            </div>
        </section>
    )
}

export default Accessories