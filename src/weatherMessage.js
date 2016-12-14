import React, { Component } from 'react';

export default class Message extends Component{
  render(){
    let {location, temp} = this.props;
    return(
      <div>
        {location === '' ? <h4>Introduce una ciudad</h4> : <h4>{location} está en este momento a {temp}ºC</h4>}
      </div>
    );
  }
}
