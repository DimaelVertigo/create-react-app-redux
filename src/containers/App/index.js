import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';
import Page from '../../components/Page/';

import {Link} from 'react-router-dom';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';


class App extends Component {
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
          <br/>
          <br/>

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

