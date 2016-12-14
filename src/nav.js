import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component{
  render(){
    return(
      <div>
        <Link to="/" className="mdl-button mdl-js-button mdl-js-ripple-effect">Get Weather</Link>
        <Link to="/about" className="mdl-button mdl-js-button mdl-js-ripple-effect">About</Link>
        <Link to="/examples" className="mdl-button mdl-js-button mdl-js-ripple-effect">Examples</Link>
      </div>
    );
  }
}
