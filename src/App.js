import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Row, Col, Grid} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import './App.css';
const cities =['Santiago, cl','Lima, pe','Buenos Aires, ar','Bogota, col'];


class App extends Component {

  constructor () {
    super();
    this.state={ city:null}
  }

  handleSelectionLocation = (city) => {
    this.setState({city});
    console.log(`handleSelectionList ${cities}`);
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
              <Toolbar>
                  <Typography variant='title' color='inherit'>Weather App</Typography>
              </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}
          />
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className='details'>
                {
                  !city ? 
                  <h1>No se selecciono ciudad</h1>:
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
