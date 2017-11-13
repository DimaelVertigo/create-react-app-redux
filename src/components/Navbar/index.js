import React, {Component} from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="navbar-header">
          <div className="navbar-header__logo">
            <a href="index.html">
              <img src="https://www.comodo.com/images/comodo-logo.png" alt="Comodo Logo"/>
            </a>
          </div>
        </div>
        <ul className="nav-list">
          <li className="nav-list__item"><i></i>
            <a href="">Users</a>
          </li>
          <li className="nav-list__item"><i></i>
            <a href="">Active User Scans</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Daily Scan Settings</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Excluded Plugins</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Servers For License</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">GeoLocation</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Scan Count</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Trust Logo Status</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">System Settings</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">False Positives</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Pack Reports</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Logging</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Schedule Tasks</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Plugin Outputs for special notes</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Servers</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Test Services</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Plugin Groups</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Automatic failure</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Import merchants</a>
          </li>
          <li className="nav-list__item">
            <i></i>
            <a href="">Reload branding content</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
