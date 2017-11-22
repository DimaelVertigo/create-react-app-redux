import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App/';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore/';

import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';
import {Route} from 'react-router';

const history = createHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
