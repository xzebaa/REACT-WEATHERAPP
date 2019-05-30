import React from 'react';
import WeahterLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeahterLocation city="Santiago,cl"></WeahterLocation>
        <WeahterLocation city="Bogota,col"></WeahterLocation>
        <WeahterLocation city="Lima,pe"></WeahterLocation>
    </div>
)

export default LocationList;