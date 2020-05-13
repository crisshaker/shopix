import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/normalize.css';
import './assets/css/styles.css';
import App from './App';

import { createStore } from 'redux';
import reducers from './reducers';
const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
