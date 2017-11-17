import React, {Component} from 'react';
import './index.css';
import EnhancedTable from '../Table/';

import Typography from 'material-ui/Typography';

const pageSwitcher = (page) => {
  switch (page) {
    case 'servers':
      return <EnhancedTable/>;
    case 'users':
      return <div>Users page</div>;
    default:
      return <div>(!) Default page</div>;
  }

}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Typography type="title" gutterBottom>
          page
        </Typography>
      </div>
    );
  }
}

export default Content;
