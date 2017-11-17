import React, {Component} from 'react';
import './index.css';
import logo from './comodo_logo.gif';

import {Grid, Button, Typography, Toolbar, AppBar, FormControl, TextField} from 'material-ui';

class Auth extends Component {
  render() {
    return (
      <div className="auth">


        <Grid container spacing={0} justify="center" alignContent="center">
          <Grid item xs={12} md={5}>
            <div className="auth-head">
              <a href="index.html"><img src={logo} alt="Comodo Logo"/></a>
            </div>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography type="title" color="inherit">
                  Welcome to HackerGuardian
                </Typography>
              </Toolbar>
            </AppBar>
            <form className="form" noValidate autoComplete="off">
              <FormControl fullWidth>
                <TextField
                  required
                  id="username"
                  label="Username"
                  type="text"
                  autoComplete="name"
                  margin="normal"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
              </FormControl>
              <FormControl>
                <Button raised color="primary" className="login-button">
                  Login
                </Button>
              </FormControl>
            </form>
            <div className="auth-links">
              <Button href="#" color="accent">
                Forgot Password
              </Button>
              <Button href="#flat-buttons" color="primary">
                get free license
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Auth;
