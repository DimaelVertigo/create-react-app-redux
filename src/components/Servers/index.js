import React, {Component} from 'react';
import {connect} from 'react-redux';

import {url, apiGetList} from '../../config/data';

class Servers extends Component {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);

    this.state = {
      list: []
    }
  }

  getList() {
    const list = this.state.list;
    if (list.length) {
      const listItems = list.map((item, index) => {
        return (
          <li key={index}>
            <div>{item.forLocalIp}</div>
            <div>{item.nessusCertificatePath}</div>
            <div>{item.nessusHost}</div>
            <div>{item.nessusId}</div>
            <div>{item.nessusLocationId}</div>
            <div>{item.nessusLogin}</div>
            <div>{item.nessusPassword}</div>
            <div>{item.nessusPort}</div>
            <div>{item.nessusScanningCapacity}</div>
            <div>{item.scannerType}</div>
          </li>
        )
      })
      return (
        <div>
          {listItems}
        </div>
      );
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    return fetch(url + apiGetList, {
      method: 'get',
      headers: {
        'Accept-Encoding': 'gzip,deflate',
        token
      }
    })
      .then(result => {
        return result.json();
      }).then(data => {
        this.setState({
          list: [...data]
        })
        return data;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Servers">
        {this.getList()}
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

