import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

import {path, url, apiGetList} from '../../config/data';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Auth from '../../components/Auth/';
import Page from '../../components/Page/';

// import {Route} from 'react-router';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.cleanCookie = this.cleanCookie.bind(this);
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      console.log('---------------------- DEV ------------------------')
    }

    const token = localStorage.getItem('token');
    console.log(localStorage)
    return fetch(url + apiGetList, {
      method: 'get',
      headers: {
        'Accept-Encoding': 'gzip,deflate',
        'token': token
      }
    })
      .then( _ => {
        this.props.history.push('page');
      })
      .catch( _ => {
        this.props.history.push('auth');
      });
  }

  cleanCookie() {
    localStorage.clear();
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        type: 'light',
      },
    });
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <button onClick={this.cleanCookie}>cleanCookie</button>
          <br/>
          <br/>
          <Link to={path}>Home</Link>
          <br/>
          <Link to={`${path}auth`}>auth</Link>
          <br/>
          <Link to={`${path}page`}>page</Link>
          <br/>
          <Route exact path={`${path}auth`} component={Auth}/>
          <Route path={`${path}page`} component={Page}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
    auth: store.auth
  }
};

export default connect(mapStateToProps)(App);

