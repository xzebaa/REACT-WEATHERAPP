import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { SUN, WINDY } from '../../constants/weathers';

const location ='Santiago ,cl';
const api_key='f0209ba6ed7e97653b9a3ffcb73f019c';
const url_base_weather='https://api.openweathermap.org/data/2.5/weather'
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const dataWeather = {
    temperature : 20,
    weatherState: SUN,
    humidity: 3,
    wind :'10 m/s'
};

const dataWeather2 = {
    temperature : 17,
    weatherState: WINDY,
    humidity: 30,
    wind :'15 m/s'
};

class WeahterLocation extends Component{

    constructor(){
        super();

        this.state={
            city:'Santiago, Chile',
            data:dataWeather
        }
    }

    getData = (weather_data) => {
        const {humidity, temp} = weather_data;
        const {speed} =weather_data.wind;
        const weatherState =SUN;

        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind : `${speed} m/s`
        }

    };

    handlerUpdateClick =()=>{

        let cbOk = (response) => {
            console.log(response.json())
        }
        fetch(api_weather).then(cbOk);

        console.log(`actualizado`);
        this.setState({
            data: dataWeather2
        });
    }

    render(){
        const { city ,data} = this.state;
        return (
            <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handlerUpdateClick} >actualizar</button>
    </div>
        );
    };
}

export default WeahterLocation;