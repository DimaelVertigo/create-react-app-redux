import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Auth from '../../components/Auth/';
import Page from '../../components/Page/';

import {Route} from 'react-router';
import {Link} from 'react-router-dom';



class App extends Component {
  componentWillMount(){

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
          <Link to="/auth">auth</Link>
          <br/>
          <Link to="/page">page</Link>
          <Route exact path="/auth" component={Auth}/>
          <Route path="/page" component={Page}/>
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

