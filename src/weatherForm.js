import React, { Component } from 'react';

export default class Form extends Component{
  onFormSubmit = (e) => {
    e.preventDefault();

    let location = this.refs.location.value;
    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
    return;
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" ref="location" id="sample1"/>
        </div>
        <div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" >Get Weather</button>
        </div>
      </form>
    );
  }
}
