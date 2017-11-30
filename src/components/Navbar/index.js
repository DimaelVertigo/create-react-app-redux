import React, {Component} from 'react';
import './index.css';

import List, {ListItem, ListItemText} from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import {Link} from 'react-router-dom';
import {path} from '../../config/data';

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
      <div className="Navbar">
        <List subheader={<ListSubheader>Version: 13533</ListSubheader>}>
          <ListItem button>
            <Link to={`${path}page/servers`}>
              <ListItemText primary="Servers" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Users"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Active User Scans"/>
          </ListItem>

          <ListItem button>
            <Link to="/example"><ListItemText primary="GeoLocation" /></Link>
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



    );
  }
}



export default Navbar;
