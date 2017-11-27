import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

import {url, apiGetList} from '../../config/data';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Auth from '../../components/Auth/';
import Page from '../../components/Page/';

import {Route} from 'react-router';
import {Link} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.cleanCookie = this.cleanCookie.bind(this);
  }

  componentDidMount() {
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
        this.props.history.push('/redux/page');
      })
      .catch( _ => {
        this.props.history.push('/redux/auth');
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
          <Link to="/">Home</Link>
          <br/>
          <Link to="/redux/auth">auth</Link>
          <br/>
          <Link to="/redux/page">page</Link>
          <br/>
          <button onClick={this.cleanCookie}>cleanCookie</button>
          <Route exact path="/redux/auth" component={Auth}/>
          <Route path="/redux/page" component={Page}/>
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

