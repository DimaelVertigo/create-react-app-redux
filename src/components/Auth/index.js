import React, {Component} from 'react';
import './index.css';
import logo from './comodo_logo.gif';

import {Grid, Button, Typography, Toolbar, AppBar, FormControl, TextField} from 'material-ui';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);

    this.state = {
      login: '',
      password: ''
    };
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  logIn(user) {
    // return fetch('http://newdev-hg.das.comodo.od.ua:8080/scan-manager/login', {
    //   method: 'post',
    //   headers: {
    //     'Accept-Encoding': 'gzip,deflate',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     'username': 'rossy',
    //     'password': 'test'
    //   })
    // })
    // .then(result => {
    //     return result.json();
    //   }).then(data => {
    //     console.log(data);
    //     return data;
    //   })

    return {
      error: null,
      token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3NzeSIsInVzZXJJZ…WnFXIBgZ3QBNLYDiBgmFOMv6qof7f-0BubMSNZca0F9QdbMeg"
    }
  }
  render() {
    return (
      <div className="auth">
        <Grid container spacing={0} justify="center" alignContent="center">
          <Grid item xs={12} md={5} lg={3}>
            <div className="auth-head">
              <a href="index.html"><img src={logo} alt="Comodo Logo"/></a>
            </div>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography type="title" color="inherit">
                  Welcome to Scan Manager
                </Typography>
              </Toolbar>
            </AppBar>
            <form className="form" noValidate autoComplete="off">
              <span>{this.state.login}</span>
              <FormControl fullWidth>
                <TextField
                  required
                  autoFocus
                  id="username"
                  label="Username"
                  type="text"
                  autoComplete="name"
                  margin="normal"
                  name="login"
                  onChange={this.handleInput.bind(this)}
                  value={this.state.login}
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
                  name="password"
                  onChange={this.handleInput.bind(this)}
                  value={this.props.password}
                />
              </FormControl>
              <FormControl>
                <Button raised color="primary"
                        disabled={!(this.state.login && this.state.password)}
                        className="login-button"
                        onClick={this.logIn}>
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

// {error: null, token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3NzeSIsInVzZXJJZ…WnFXIBgZ3QBNLYDiBgmFOMv6qof7f-0BubMSNZca0F9QdbMeg"}

// {error: "Bad credentials", token: null}