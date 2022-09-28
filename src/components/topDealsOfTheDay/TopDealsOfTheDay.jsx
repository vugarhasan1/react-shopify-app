import React from 'react'
import './topDealsOfTheDay.scss';
import Timer from '../timer/Timer';
import MainSlider from '../../pages/slider/MainSlider'

const TopDealsOfTheDay = () => {
   
    return (
        <section id='topDealOfDay'>
            <div className="theTopDeal container">
                <div className="capter__time">
                    <h3 className="capterOfDeal">Top Deals Of The Day</h3>
                    <div className="hurryUp">
                        <p className='hurry'>Hurry Up! Offer ends in:</p>
                        <span className='timer'><Timer /></span>
                    </div>
                </div>

                <div className="product__slider">
                    <MainSlider/>
                </div>



            </div>
        </section>
    )
}

export default TopDealsOfTheDay