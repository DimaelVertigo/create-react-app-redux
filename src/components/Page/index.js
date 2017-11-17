import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import * as pageActions from '../../actions/PageActions';

import Navbar from '../../components/Navbar/';
import Content from '../../components/Content/';

import {Grid, AppBar, Toolbar} from 'material-ui';
import Drawer from 'material-ui/Drawer';

class Page extends Component {

  render() {
    const page = this.props.page;
    const actions = this.props.pageActions;

    return (
      <Grid container spacing={0}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <div className="comodo-logo">
              <a href="index.html">
                <img src="http://dev.hg.comodo.od.ua/sas/admin/resources/images/logo_sas.gif" alt="Comodo Logo"/>
              </a>
            </div>
          </Toolbar>
        </AppBar>
        <Grid item md={3} lg={2}>
          <Drawer type="permanent" className="drawer">
            <Navbar actions={actions}/>
          </Drawer>
        </Grid>
        <Grid item md={9} lg={10}>
          <Content page={page}/>
        </Grid>
      </Grid>
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