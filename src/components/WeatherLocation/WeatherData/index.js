import React from 'react';
//import PropTypes from 'prop-types'
import convert from 'convert-units'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeaterTemperature from './WeatherTemperature';
import './styles.css';



const WeatherData = ({data:{temperature,weatherState,humidity,wind}})=>{

    // const {temperature,weatherState,humidity,wind} = data; 2 forma de hacer destruturing

    return (<div className="WeatherDataCont">
         <WeaterTemperature temperature={temperature} weatherState={weatherState}
         />
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
       
    </div>)
}

// WeatherData.PropTypes ={
//     data:PropTypes.shape({
//         temperature:PropTypes.number.isRequired,
//         weatherState:PropTypes.string.isRequired,
//         humidity:PropTypes.number.isRequired,
//         wind:PropTypes.string.isRequired,
//     })
// }

export default WeatherData;