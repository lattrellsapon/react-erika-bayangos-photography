import React, { Component } from 'react';
import Divider from './Divider';
import ProjectDisplayOne from '../images/pic2.jpg';
import ProjectDisplayTwo from '../images/pic3.jpg';
import ProjectDisplayThree from '../images/pic9.jpg';
import { Link } from 'react-router-dom';

export class Projects extends Component {
  render() {
    return (
      <div>
        <Divider />
        <div className='container' id='projects'>
          <h3 className='subheading'>Projects</h3>
          <div className='grid'>
            <div className='project-content'>
              <img src={ProjectDisplayTwo} alt='' />
              <div className='overlay'>
                <div className='text'>
                  <Link to='/weddings' id='project-links'>
                    Wedding
                  </Link>
                </div>
              </div>
            </div>

            <div className='project-content'>
              <img src={ProjectDisplayOne} alt='' />
              <div className='overlay'>
                <div className='text'>
                  <Link to='/family' id='project-links'>
                    Family
                  </Link>
                </div>
              </div>
            </div>

            <div className='project-content'>
              <img src={ProjectDisplayThree} alt='' />
              <div className='overlay'>
                <div className='text'>
                  <Link to='/lifestyle' id='project-links'>
                    Lifestyle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
