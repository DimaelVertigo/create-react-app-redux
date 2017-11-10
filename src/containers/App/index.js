import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './index.css';
import User from '../../components/User/';
import Page from '../../components/Page/';
import * as pageActions from '../../actions/PageActions';

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { setYear } = this.props.pageActions;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User name={user.name} surname={user.surname} age={user.age}/>
          <Page year={page.year} setYear={setYear}/>
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
