import React, { Component } from 'react';
import Message from './weatherMessage.js';
import Form from './weatherForm.js';
import openWeatherMap from './api/openWeatherMap.js'
import HttpsRedirect from 'react-https-redirect';

export default class Weather extends Component{
  constructor(){
    super();
    this.state = {
      isLoading: false,
      location: ''
    }
  }
  handleSearch = (location) => {
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({isLoading: false})
        alert("El sistema ha detectado un error en su petición");
    });
  }
  render(){
    let {location, temp, isLoading} = this.state;
    return(
      <div>
        <HttpsRedirect>
          <h3>Get Weather</h3>
          <Form onSearch={this.handleSearch}/>
          {isLoading ? <h3>Loading...</h3> : <Message location={location} temp={temp}/>}
        </HttpsRedirect>
      </div>
    );
  }
}
