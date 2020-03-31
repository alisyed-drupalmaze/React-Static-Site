import React from 'react';
import HeroCarousel from '../../Carousel/Carusel'
import HomePageCards from './HomePageCards/HomePageCards'
import HomePageBanner from './HomePageBanner/HomePageBanner'
function HomePage () {

    return (
        <div className="row">
        <div className="col s12">
        <div class="row">
           <HeroCarousel />
          </div>
            
            <HomePageBanner />
            <HomePageCards />
        </div>
      </div>

    )
  
}

export default HomePage;