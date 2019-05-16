import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/weddings'>Weddings</Link>
          </li>
          <li>
            <Link to='/family'>Family</Link>
          </li>
          <li>
            <Link to='/lifestyle'>Lifestyle</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
