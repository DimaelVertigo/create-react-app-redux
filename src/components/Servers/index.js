import React, {Component} from 'react';
import {connect} from 'react-redux';

import {url, apiGetList} from '../../config/data';

import EnhancedTable from '../Table/'

class Servers extends Component {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
  }

  getList() {
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
        console.log(data)
        return data;
      })
      .catch(err => console.log(err));
  }

  renderContent() {
    let content = [];
    // this.getList().then(response => {
    //   console.log(response)
    //   content = response.map(item => {
    //     console.log(item)
    //     return {name: item.nessusHost}
    //   })
    // })
    // return content;
  }

  render() {
    // console.log(this.renderContent())
    return (
      <div className="Servers">
        Servers table
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

