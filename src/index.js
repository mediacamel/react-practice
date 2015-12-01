import React from 'react'; // var React = require('React');
import { render } from 'react-dom'; // var render = require('react-dom').render;
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'

const store = configureStore()

render(
	<Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
