import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import './index.css';
import * as pageActions from '../../actions/PageActions';
import Navbar from '../../components/Navbar/index';
import Content from '../../components/Content/index';

class App extends Component {
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    const { user, page } = this.props;
    const { setYear, sayNo, getik } = this.props.pageActions;
    return (

      <div className="App">
        <Navbar/>
        <Content/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}
// https://github.com/rajdee/redux-in-russian/blob/master/docs/api/bindActionCreators.md
export default connect(mapStateToProps, mapDispatchToProps)(App);

// <div className="App">
//<header className="App-header">
//  <User name={user.name} surname={user.surname} age={user.age}/>
//  <Page year={page.year} setYear={setYear} sayNo={sayNo} getik={getik}/>
//</header>
//</div>