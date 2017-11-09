import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
  render() {
    const {name, surname, age} = this.props;
    return <div>
      <h1 className="App-title">Welcome to_ {name} {surname} {age}!</h1>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};