import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as pageActions from '../../actions/PageActions';

import PermanentDrawer from '../PermanentDrawer/'

class Page extends Component {

  render() {
    return (
      <div>
        <PermanentDrawer/>
      </div>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    page: store.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);

