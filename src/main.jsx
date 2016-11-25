import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// Onsen UI Styling and Icons
import 'bootstrap-without-jquery';
require('onsenui/stylus/custom-theme.styl');
require('onsenui/css/onsenui.css');
require('onsenui/css/c.css');


import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
