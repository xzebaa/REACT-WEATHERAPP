import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import transformWeather from './../../services/transformWeather'
import geturlWeatherByCity from './../../services/getUrlWeatherByCity'


class WeahterLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props; 
        this.state={
            city,
            data:null
        }
        console.log('constructor');
    }

    componentDidMount(){
        console.log(' componentDidMount');
        this.handlerpdUateClick();
    }

    componentDidUpdate(){
        console.log(' componentDidUpdate');
    }

    handlerpdUateClick =()=>{
        const api_weather= geturlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve =>{
            return resolve.json()
        }).then( data=>{
           
            const newWeather= transformWeather(data);
            this.setState({
                data: newWeather
            });
        }
        );
    }

    render(){
        console.log('RENDER');
        const {onWeatherLocationClick} = this.props;
        const { city ,data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress />}
    </div>
        );
    };
}

export default WeahterLocation;