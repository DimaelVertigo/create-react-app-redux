import React, {Component} from 'react';
import './index.css';

import List, {ListItem, ListItemText} from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.showServers = this.showServers.bind(this);
    this.showUsers = this.showUsers.bind(this);
  }
  showServers() {
    this.props.showServers();
  }
  showUsers() {
    this.props.showUsers();
  }
  render() {
    return (
      <div className="Navbar">
        <List subheader={<ListSubheader>Version: 13533</ListSubheader>}>
          <ListItem button onClick={this.showServers} >
            <ListItemText primary="Users"/>
          </ListItem>
          <ListItem button onClick={this.showUsers}>
            <ListItemText primary="Active User Scans"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Servers For License"/>
          </ListItem>
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
    );
  }
}

export default Navbar;