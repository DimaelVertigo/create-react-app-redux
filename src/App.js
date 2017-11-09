import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
  const { name, surname, age } = this.props.user;
  const { year } = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to_ {name} {surname} {age}!</h1>
          <p>Year {year}</p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
