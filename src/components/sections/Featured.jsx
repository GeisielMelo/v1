import React from 'react';
import LeftShowcase from '../featured/LeftShowcase';
import RightShowcase from '../featured/RightShowcase';

const Featured = () => {
    return(
        <section id="featured">
            <LeftShowcase />
            <RightShowcase />
        </section>
    )
};

export default Featured;