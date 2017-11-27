import React, {Component} from 'react';
import './index.css';
import {Typography} from 'material-ui';


class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = this.props.location.pathname.split('/').pop();
    return (
      <div className="Title">
        <Typography type="title" color="inherit">
          {location}
        </Typography>
      </div>
    );
  }
}

export default Title;

