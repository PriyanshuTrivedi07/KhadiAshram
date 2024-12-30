import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = ({ children }) => {
    return (
        <ResponsiveCarousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
        >
            {children}
        </ResponsiveCarousel>
    );
};

export default Carousel