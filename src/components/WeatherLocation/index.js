import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';



const WeahterLocation = ()=>(
    <div>
        <Location city={'Santiago, Puente Alto'}></Location>
        <WeatherData></WeatherData>
    </div>
)

export default WeahterLocation;