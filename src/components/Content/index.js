import React, {Component} from 'react';
import './index.css';

import Servers from '../../components/Content/'

import {Router, Route} from 'react-router';

import Typography from 'material-ui/Typography';

const Content = () => {
  return (
    <div className="content">
      <Typography type="title" gutterBottom>
          Content
      </Typography>
    </div>
  );
}

export default Content;
