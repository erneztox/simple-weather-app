import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component{
  render(){
    return(
      <div>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }
}
