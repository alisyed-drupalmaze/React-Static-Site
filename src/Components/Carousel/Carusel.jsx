import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carusel.style.css'
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';


import Hero_img_001 from './assets/img__001.jpg';

import Hero_img_002 from './assets/img__002.jpg';

import Hero_img_003 from './assets/img__003.jpg';

import Hero_img_004 from './assets/img__004.jpg';


class HeroCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Hero_img_001}  alt="Embarrassing hidden in the middle of text" />
                </div>

                <div>
                    <img src={Hero_img_002}  alt="Many desktop publishing" />
                </div>

                <div>
                    <img src={Hero_img_003}  alt="Various versions have evolved over the years" />
                   
                </div>

                <div>
                    <img src={Hero_img_004}  alt="Various versions have evolved over the years" />
                    
                </div>
            </Carousel>
        );
    }
};

export default HeroCarousel;