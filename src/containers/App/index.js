import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './index.css';
import {connect} from 'react-redux';
import User from '../../components/User/';
import Page from '../../components/Page/';
import * as pageActions from '../../actions/PageActions';

class App extends Component {
  render() {
    const { user, page } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User name={user.name} surname={user.surname} age={user.age}/>
          <Page year={page.year}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
