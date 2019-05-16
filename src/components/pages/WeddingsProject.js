import React, { Component } from 'react';
import ImageOne from '../../images/pic3.jpg';
import ImageTwo from '../../images/pic6.jpg';
import ImageThree from '../../images/pic7.jpg';
import ImageFour from '../../images/pic10.jpg';

export class WeddingsProject extends Component {
  render() {
    return (
      <div className='container' id='weddings'>
        <div className='title-container'>
          <h3 className='subheading'>Weddings</h3>
        </div>

        <div className='image-container'>
          <img src={ImageOne} alt='' />
        </div>
        <div className='image-container'>
          <img src={ImageTwo} alt='' />
        </div>
        <div className='image-container'>
          <img src={ImageThree} alt='' />
        </div>
        <div className='image-container'>
          <img src={ImageFour} alt='' />
        </div>
      </div>
    );
  }
}

export default WeddingsProject;
