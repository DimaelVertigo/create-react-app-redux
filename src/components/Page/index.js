import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStore } from 'redux';

import {getik, sayNo} from '../../actions/PageActions';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.OnYearBtnClick = this.OnYearBtnClick.bind(this);
  }

  componentWillMount() {

  }

  OnYearBtnClick() {
    this.props.getik();
  }

  render() {
    const {year} = this.props;
    return <div>
      <p>Year {year}</p>
      <button onClick={this.OnYearBtnClick}>button</button>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired
};