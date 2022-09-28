import React from 'react'
import './info.scss';
import { custom1, custom2, custom3 } from '../../assets/index';


const Info = () => {
    return (
        <section id='info'>
            <div className="main__infoes container">
                <div className="sec_info delivery">
                    <div className="icon">
                        <img src={custom1} alt="" />
                    </div>
                    <div className="content">
                        <h4>FREE DELIVERY</h4>
                        <p>For all orders over $120</p>
                    </div>
                </div>
                <div className="sec_info payment">
                    <div className="icon">
                        <img src={custom2} alt="" />
                    </div>
                    <div className="content">
                        <h4>SAFE PAYMENT</h4>
                        <p>Dedicated 24/7 support</p>
                    </div>
                </div>
                <div className="sec_info help_center">
                    <div className="icon">
                        <img src={custom3} alt="" />
                    </div>
                    <div className="content">
                        <h4>24/7 HELP CENTER</h4>
                        <p>Dedicated 24/7 support</p>
                    </div>
                </div>
                <div className="sec_info services">
                    <div className="icon">
                        <img src={custom2} alt="" />
                    </div>
                    <div className="content">
                        <h4>FRIENDLY SERVICES</h4>
                        <p>30 day satisfaction guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info