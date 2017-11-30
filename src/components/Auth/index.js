import React, {Component} from 'react';
import './index.css';
import logo from './comodo_logo.gif';
import {path, url, apiLogin} from '../../config/data';

import {
  Grid,
  Button,
  Typography,
  Toolbar,
  AppBar,
  FormControl,
  TextField
} from 'material-ui';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.loginRequest = this.loginRequest.bind(this);
    this.loginStatus = this.loginStatus.bind(this);

    this.state = {
      username: '',
      password: '',
      isAuthentificated: '',
      message: ''
    };
  }

  componentDidMount() {
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginRequest() {
    return fetch(url + apiLogin, {
      method: 'post',
      headers: {
        'Accept-Encoding': 'gzip,deflate',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        this.state
        // {"username": "rossy", "password": "test"}
      )
    })
    .then(result => {
        return result.json();
      }).then(data => {
        this.loginStatus(data)
        return data;
      })
      .catch(error => {console.log(error)})
  }

  loginStatus(answer) {
    if (answer.error) {
      this.setState({
        isAuthentificated: false,
        message: 'Type correct name or password'
      });
    } else {
      this.setState({
        isAuthentificated: true,
      });
      localStorage.setItem('token', answer.token);
      this.props.history.push(`${path}page`);
    }

  }

  render() {
    return (
      <div className="auth">
        <Grid container spacing={0} justify="center" alignContent="center">
          <Grid item xs={7} md={5} lg={3}>
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


              <FormControl fullWidth>
                <TextField
                  required
                  autoFocus
                  id="username"
                  label="Username"
                  type="text"
                  autoComplete="name"
                  margin="normal"
                  name="username"
                  onChange={this.handleInput.bind(this)}
                  value={this.state.username}
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
                        className="login-button"
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.loginRequest}>
                  Login
                </Button>
              </FormControl>
            </form>
            {
              this.state.message &&
              <Typography
                gutterBottom
                noWrap
                className="auth__message"
                align="center">
                {this.state.message}
              </Typography>
            }
            <div className="auth-links">
              <Button
                href="https://secure.comodo.net/management/passwordResetRequest.html"
                target="_blanck"
                color="accent">
                  Forgot Password
              </Button>
              <Button
                href="https://www.hackerguardian.com/hackerguardian/buy/pci-free-scan.htmls"
                target="_blanck"
                color="primary">
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

// disabled={!(this.state.username && this.state.password)}


