import React from 'react';
import WeahterLocation from './WeatherLocation';
import './styles.css'
const LocationList = ({cities,onSelectedLocation}) => {

  const handleWeatherLocationClick = (city) => {
    console.log('handleWeatherLocationClick '+city);
    onSelectedLocation(city)
  }

  const arrayToComponent = (cities) =>{
    return cities.map( 
      ( city ) => 
        (
            <WeahterLocation 
              key={city} 
              city={city} 
              onWeatherLocationClick={() => (handleWeatherLocationClick(city))}/>
        )
      )
  }

  return (
  <div className="locationList">
      {arrayToComponent(cities)}
  </div>
  )
}
export default LocationList;