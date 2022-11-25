import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Catagories from '../Catagories/Catagories';
import GetStarted from '../GetStarted/GetStarted';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AdvertisedItem></AdvertisedItem>
            <Catagories></Catagories>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;