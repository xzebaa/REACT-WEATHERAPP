import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity,wind})=> (
    <div className="WeatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad:  ${humidity} % -`}</span>
        <span className="extraInfoText">{`Vientos: ${wind} `}</span>
    </div>
)

WeatherExtraInfo.PropTypes={
    humidity:PropTypes.number.isRequired
}
export default WeatherExtraInfo;