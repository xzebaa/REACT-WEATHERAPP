import React, { Component } from 'react';
import WeaterLocation from './components/WeatherLocation'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( 
        <div className = "App" > 
        <WeaterLocation/>
        
         </div>
        );
    }
}
export default App;