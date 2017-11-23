/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import classNames from 'classnames';
import logo from './logo_sas.gif';

import { withStyles } from 'material-ui/styles';
import {Drawer, AppBar, Toolbar, Typography, Divider} from 'material-ui';

import Navbar from '../Navbar/';
import Servers from '../Servers/';
import Title from '../Title/';

import {Route} from 'react-router';
import {Link} from 'react-router-dom';


const drawerWidth = 300;

const styles = theme => ({
  root: {
    width: '100%',
    height: '90%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class PermanentDrawer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar)}>
            <Toolbar>
              <Route component={Title}/>
            </Toolbar>
          </AppBar>

          <Drawer
            type="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <Link to="/">
                <img src={logo} alt="Sas logo" width="90%"/>
              </Link>
            </div>
            <Divider />

            <Navbar/>

            <Divider />
          </Drawer>

          <main className={classes.content}>
            <Route path="/page/servers" component={Servers}/>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
    auth: store.auth,
    store: store
  }
};


export default withStyles(styles)(PermanentDrawer);




