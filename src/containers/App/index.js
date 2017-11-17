import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.css';
import * as pageActions from '../../actions/PageActions';

import Page from '../../components/Page/'
import Auth from '../../components/Auth/'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

class App extends Component {
  componentWillMount() {

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
          <Auth auth={this.props.auth}/>
          <Page page={this.props.page} pageActions={this.props.pageActions}/>
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

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

