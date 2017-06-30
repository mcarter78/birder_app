import React from 'react';
import ReactDOM from 'react-dom';
// uncomment when ready to set up redux
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Profile from './Components/Profile';
import Login from './Components/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/profile" />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
