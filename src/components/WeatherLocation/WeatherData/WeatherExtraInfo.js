import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity,wind})=> (
    <div className="WeatherExtraInfoCont">
        <span>{`${humidity} % -`}</span>
        <span>{`${wind} Viento `}</span>
    </div>
)

WeatherExtraInfo.PropTypes={
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
}
export default WeatherExtraInfo;