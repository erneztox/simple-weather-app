import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Weather from './weather.js';
import About from './about.js';
import Examples from './examples.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const AllApp = () => (
    <Router history={browserHistory}>
      <Route path="/" component={App} >
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>
);

ReactDOM.render(
<AllApp />, document.getElementById('root')
);
