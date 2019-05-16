import React, { Component } from 'react';
import Divider from './Divider';
import Test from '../images/pic1.jpg';

export class Networking extends Component {
  render() {
    return (
      <div>
        <div>
          <Divider />
        </div>
        <div className='container'>
          <i className='fab fa-instagram' id='ig-logo' />
          <br />
          <a href='' id='ig-username'>
            @testuser
          </a>
          <div className='six-grid'>
            <div>
              <img src={Test} alt='' />
            </div>
            <div>
              <img src={Test} alt='' />
            </div>
            <div>
              <img src={Test} alt='' />
            </div>
            <div>
              <img src={Test} alt='' />
            </div>
            <div>
              <img src={Test} alt='' />
            </div>
            <div>
              <img src={Test} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Networking;
