import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>
          Website by
          <a
            href='https://www.treezywebdesign.com/'
            target='_blank'
            id='treezywebdesign'
            rel='noopener noreferrer'
          >
            Treezy Web Design
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
