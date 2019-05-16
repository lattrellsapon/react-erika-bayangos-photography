import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Weddings</a>
          </li>
          <li>
            <a href=''>Family</a>
          </li>
          <li>
            <a href=''>Lifestyle</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
