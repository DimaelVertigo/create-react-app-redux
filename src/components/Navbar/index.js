import React, {Component} from 'react';
import './index.css';

import List, {ListItem, ListItemText} from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';

import Content from '../Content/'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import Content from '../Content/index';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.goToServers = this.goToServers.bind(this);
    this.goToUsers = this.goToUsers.bind(this);
  }

  goToServers() {
    this.props.actions.showServers();
  }

  goToUsers() {
    this.props.actions.showUsers();
  }

  render() {
    return (
      <Router>
        <div>

          <div className="Navbar">
            <List subheader={<ListSubheader>Version: 13533</ListSubheader>}>
              <ListItem button onClick={this.goToServers}>
                <ListItemText primary="Users"/>
              </ListItem>
              <ListItem button onClick={this.goToUsers}>
                <ListItemText primary="Active User Scans"/>
              </ListItem>
                <Link to="/">home</Link>
                <Link to="/content">content</Link>
                <Link to="/about">about</Link>
                <Link to="/example">example</Link>
              <ListItem button>
                <ListItemText primary="GeoLocation"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Scan Count"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trust Logo Status"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="System Settings"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="False Positives"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pack Reports"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Logging"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Schedule Tasks"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Plugin Outputs for special notes"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Servers"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Test Services"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Plugin Groups"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Automatic failure"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Import merchants"/>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Reload branding content"/>
              </ListItem>
            </List>

          </div>
          <Route path="/content" component={Content}/>
          <Route path="/about" component={About}/>
          <Route path="/example" component={Example}/>
        </div>
      </Router>



    );
  }
}


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Example = () => (
  <div>
    <h2>Example</h2>
  </div>
)

export default Navbar;
