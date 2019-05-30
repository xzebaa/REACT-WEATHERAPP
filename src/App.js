import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';

class App extends Component {
    render() {
        return ( 
        <div className = "App" > 
        <LocationList/>
        
         </div>
        );
    }
}
export default App;