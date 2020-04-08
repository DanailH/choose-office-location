import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      {/* Catch all route that riderects to root */}
      <Route component={() => (<Redirect to='/' />)} />
    </Switch>
  </Router>
);

ReactDOM.render(Routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
