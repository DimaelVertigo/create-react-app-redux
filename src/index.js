import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './containers/App/';
import Page from './components/Page/';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore/';

const store = configureStore();
/**
 * Provider
 *
 * “Благодаря этому компоненту, мы сможем получать необходимые данные из store нашего приложения, если воспользуемся вспомогательной функцией connect”
 */
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
