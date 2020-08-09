import React from 'react';
import {registerRootComponent} from 'expo';
import {Provider} from 'react-redux';
import App from './src/App';
import {store} from './src/redux/store';

const Init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(Init);
