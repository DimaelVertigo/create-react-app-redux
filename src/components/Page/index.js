import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {
  render() {
    const {year} = this.props;
    return <div>
      <p>Year {year}</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired
};