import React from 'react'
import './topSelling.scss';
import MainSlider from '../../pages/slider/MainSlider';




const TopSellingProducts = () => {
    return (
        <section className='topSellingProducts container'>
            <div className="capter__products">
                <h3 className="capterOfDeal">Top Selling Products</h3>
                <div className="products-type">
                    <p className="laptop">Laptop & Computer</p>
                    <p className="cellphone">Cellphone</p>
                    <p className="laptop">Speakers & Audio</p>
                    <p className="laptop">Vido Game</p>
                </div>
            </div>

            <div className="top_selling_slider">
                <MainSlider/>
            </div>
        </section>
    )
}

export default TopSellingProducts