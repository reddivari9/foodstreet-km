import React, { Component } from 'react';
import { Spin } from 'antd';


export default  class Loading extends Component {

  render() {
    return (
      <div className="main-loading">
        <Spin size="large" />
      </div>
    );
  }
}