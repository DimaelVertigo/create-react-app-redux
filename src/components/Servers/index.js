import React, {Component} from 'react';
import {connect} from 'react-redux';
import EnhancedTable from '../Table/'

class Servers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Servers">
        <EnhancedTable/>
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    page: store.page,
    auth: store.auth,
    store: store
  }
};

export default connect(mapStateToProps)(Servers);
