// import React, { useState, useEffect } from 'react'
import './home.scss';
import { Hero, Info, BestPrice, TopDealsOfTheDay, Marquee, Accessories, TopSellingProducts, TopFeatured, Arivals, Recommended, Brands }
 from '../../components/index';




const Home = () => {



  return (
    <div id='homePage'>
      <Hero />
      <Info />
      <BestPrice />
      <TopDealsOfTheDay />
      <Accessories />
      <TopSellingProducts />
      <TopFeatured />
      <Marquee />
      <Arivals/>
      <Recommended/>
      <Brands/>

      {/* <div className="popUp" >
        <div className="content">

        </div>
      </div> */}

    </div>
  )
}

export default Home