import React, { Component } from 'react';

export default class Message extends Component{
  render(){
    let {location, temp} = this.props;
    return(
      <div>
        {location === '' ? <h3>Introduce una ciudad</h3> : <h3>{location} está en este momento a {temp}ºC</h3>}
      </div>
    );
  }
}
