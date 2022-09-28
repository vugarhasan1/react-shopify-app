// import React, { useState, useEffect } from 'react'
import './home.scss';
import { Hero, Info, BestPrice, TopDealsOfTheDay, Marquee, Accessories, TopSellingProducts } from '../../components/index';


const Home = () => {

  
  return (
    <div id='homePage'>
      <Hero />
      <Info />
      <BestPrice />
      <TopDealsOfTheDay />
      <Accessories />
      <TopSellingProducts />
      <Marquee />
      
      {/* <div className="popUp" >
        <div className="content">

        </div>
      </div> */}
    </div>
  )
}

export default Home