import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './containers/App/';
import Auth from './components/Auth/';
import Page from './components/Page/';
import Servers from './components/Servers/';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore/';

import {Router, Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';
import {Link} from 'react-router-dom';


const history = createHistory();

const store = configureStore();

/**
 * Provider
 *
 * “Благодаря этому компоненту, мы сможем получать необходимые данные из store нашего приложения, если воспользуемся вспомогательной функцией connect”
 */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/auth">auth</Link>
        <br/>
        <Link to="/page">page</Link>
        <Route exact path="/" component={App}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/page" component={Page}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
