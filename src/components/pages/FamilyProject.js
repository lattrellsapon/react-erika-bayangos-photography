import React, { Component } from 'react';
import ImageOne from '../../images/pic1.jpg';
import ImageTwo from '../../images/pic2.jpg';
import ImageThree from '../../images/pic4.jpg';

export class FamilyProject extends Component {
  render() {
    return (
      <div className='container' id='family'>
        <div className='title-container'>
          <h3 className='subheading'>Family</h3>
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
      </div>
    );
  }
}

export default FamilyProject;
