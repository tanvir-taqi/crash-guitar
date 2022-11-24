import React from 'react';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryProducts></CategoryProducts>
        </div>
    );
};

export default Home;