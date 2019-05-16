import React, { Component } from 'react';
import ImageOne from '../../images/pic8.jpg';
import ImageTwo from '../../images/pic9.jpg';

export class LifestyleProject extends Component {
  render() {
    return (
      <div className='container' id='lifestyle'>
        <div className='title-container'>
          <h3 className='subheading'>Lifestyle</h3>
        </div>

        <div className='image-container'>
          <img src={ImageOne} alt='' />
        </div>
        <div className='image-container'>
          <img src={ImageTwo} alt='' />
        </div>
      </div>
    );
  }
}

export default LifestyleProject;
