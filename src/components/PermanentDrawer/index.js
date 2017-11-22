/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Navbar from '../Navbar/';
import Content from '../Content/';

import {Route} from 'react-router';


const drawerWidth = 240;

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
              <Typography type="title" color="inherit" noWrap>
                Content ...
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            type="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <Typography type="title" gutterBottom>
                Scan Manager
              </Typography>
            </div>
            <Divider />
            <Navbar/>
            <Divider />
          </Drawer>

          <main className={classes.content}>
            <Typography type="body1">
              <Route path="/page/content" component={Content}/>
            </Typography>
          </main>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
