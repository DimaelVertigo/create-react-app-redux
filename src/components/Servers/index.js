import React, {Component} from 'react';
import {connect} from 'react-redux';

class Servers extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="Servers">
        Servers component
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    page: store.page,
    auth: store.auth
  }
};

export default connect(mapStateToProps)(Servers);
