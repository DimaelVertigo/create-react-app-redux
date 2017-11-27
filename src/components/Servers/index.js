import React, {Component} from 'react';
import {connect} from 'react-redux';
import EnhancedTable from '../Table/'

class Servers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(localStorage)
  }
  render() {
    return (
      <div className="Servers">
        Fuck
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


// <EnhancedTable/>
