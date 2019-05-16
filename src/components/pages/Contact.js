import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className='container' id='contact'>
        <h1 className='subheading'>Contact me</h1>
        <a href='mailto:lattrellsapon@gmail.com' id='contact-email'>
          testuser@gmail.com
        </a>
      </div>
    );
  }
}

export default Contact;
