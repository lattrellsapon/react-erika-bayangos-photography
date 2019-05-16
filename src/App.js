import React, { Component } from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import Projects from './components/Projects';
import Networking from './components/Networking';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Navbar />
        <Tagline />
        <Projects />
        <Networking />
      </div>
    );
  }
}

export default App;
