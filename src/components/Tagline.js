import React, { Component } from 'react';
import Divider from './Divider';

export class Tagline extends Component {
  render() {
    return (
      <div className='tagline'>
        <Divider />
        <i className='fas fa-camera' id='camera-logo' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          veritatis?
        </p>
      </div>
    );
  }
}

export default Tagline;
