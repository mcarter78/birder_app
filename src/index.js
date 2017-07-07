import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Profile from './Components/User/Profile';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt || sessionStorage.jwt === 'undefined') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/profile" onEnter={requireAuth} component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
