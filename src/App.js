import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import Projects from './components/Projects';
import Networking from './components/Networking';
import Contact from './components/pages/Contact';
import Weddings from './components/pages/WeddingsProject';
import Family from './components/pages/FamilyProject';
import Lifestyle from './components/pages/LifestyleProject';
import Footer from './components/Footer';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Logo />
          <Navbar />
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <Tagline />
                <Projects />
                <Networking />
              </React.Fragment>
            )}
          />
          <Route path='/weddings' component={Weddings} />
          <Route path='/family' component={Family} />
          <Route path='/lifestyle' component={Lifestyle} />
          <Route path='/contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
