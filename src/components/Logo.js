import React, { Component } from 'react';
import CompanyLogo from '../images/logo.jpg';

export class Logo extends Component {
  render() {
    return (
      <div>
        <img src={CompanyLogo} alt='' id='logo' />
      </div>
    );
  }
}

export default Logo;
