import React from 'react';
import './recommended.scss';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import MainSlider from '../../pages/slider/MainSlider';




const Recommended = () => {
    return (
        <div id='recommended' className='container'>
            <div className="main-recommended">
                <div className="capter">
                    <h2>Recommended For You</h2>
                    <div className="all-products">
                        <Link to='/' className='allPro'>All Products  <BiChevronRight /></Link>
                    </div>
                </div>

                <MainSlider/>
            </div>
        </div>
    )
}

export default Recommended