import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }

  renderForecastItemDays() {

    return days.map((day) => {
      return (<ForecastItem weekDay={day} hour={10}></ForecastItem>);
    })

  }

  renderProgress = () => {
    return <h3>Cargando contenido</h3>;
  }

  render() {

    const { city } = this.props
    const { forecastData } = this.props;
    return (
      <div><h2 className='forecast-title'>{`Pronóstico Extendido ${city}`}</h2>
        {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
      </div>
    )
  }
}

export default ForecastExtended;