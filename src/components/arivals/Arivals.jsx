import React from 'react';
import './arivals.scss';
import { top_arival, laptop_ultra, sport_edition } from '../../assets/index';




const Arivals = () => {
    return (
        <section id='arivals' className='container'>
            <div className="flex-arivals">
                <div className="left-arival arival">
                    <div className="image">
                        <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_5a3ea302-4f97-4c32-8c86-aa92780eaa95_900x.png?v=1636173541" alt="" />
                        <p className="arival-text">
                            <button>hot deal</button>
                            <p className="content">
                                sale 30% off <br />
                                top computer case gaming
                            </p>
                        </p>
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                    </div>
                </div>
                <div className="center-arival">
                    <div className="top-arival">
                        <div className="image">
                            <img src={top_arival} alt="" />
                            <p className="arival-text">
                                <h3>Electonic Deals</h3>
                                <span>Laptop, Computer, Smartphone, Game</span>
                                <button>LEARN MORE</button>
                            </p>
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                        </div>
                    </div>
                    <div className="bottom-arival">
                        <div className="image">
                            <img src={laptop_ultra} alt="" />
                            <p className="arival-text">
                                <h2>Hot Products <br />
                                    Laptop Ultra 4K 16”
                                </h2>
                                <span className='discount'>Discount 20% On Products</span>
                            </p>
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                        </div>
                    </div>
                </div>
                <div className="right-arival arival">
                    <div className="image">
                        <img src={sport_edition} alt="" />
                        <p className="arival-text">
                            <button>new arivals</button>
                            <p className='content'>
                                Sport Edition <br />
                                Best Choice Of The Year
                            </p>
                        </p>
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arivals