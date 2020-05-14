import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/normalize.css';
import './assets/css/styles.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
