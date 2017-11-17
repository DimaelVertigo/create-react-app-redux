import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/';
import Content from '../../components/Content/';

import {Grid, AppBar, Toolbar} from 'material-ui';
import Drawer from 'material-ui/Drawer';

export default class Page extends Component {

  render() {
    const {page} = this.props.page;
    const {showUsers, showServers} = this.props.pageActions;
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
            <Navbar showUsers={showUsers} showServers={showServers} />
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