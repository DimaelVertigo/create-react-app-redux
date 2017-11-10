import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.OnYearBtnClick = this.OnYearBtnClick.bind(this);
  }

  OnYearBtnClick() {
    this.props.setYear(2017);
  }

  render() {
    const {year} = this.props;
    return <div>
      <p>Year {year}</p>
      <button onClick={this.OnYearBtnClick}>0505</button>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired
};