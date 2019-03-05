import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeaterTemperature from './WeatherTemperature';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../../../constants/weathers'
import './styles.css';


const WeatherData = ()=>(

    <div className="WeatherDataCont">
         <WeaterTemperature temperature={20} weatherState={SUN}></WeaterTemperature>
        <WeatherExtraInfo humidity={"80"} wind={'10 m s'}></WeatherExtraInfo>
       
    </div>
)

export default WeatherData;