import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Catagories from '../Catagories/Catagories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AdvertisedItem></AdvertisedItem>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;