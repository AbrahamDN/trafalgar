import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Homepage from './pages/Homepage/Homepage-component';
import AppPage from './pages/App-page/App-page-component';
import Navbar from './components/NavBar/Navbar-component';
import Footer from './components/Footer/Footer-container';

import FOOTER_LINKS_DATA from './footerData';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navLinks: [
        {
          name: 'Home',
          url: '/',
          active: true,
        },
        {
          name: 'Find a doctor',
          url: '/',
        },
        {
          name: 'Apps',
          url: '/',
        },
        {
          name: 'Testimonials',
          url: '/',
        },
        {
          name: 'About us',
          url: '/',
        },
      ],
    };
  }

  render() {
    const { navLinks } = this.state;
    return (
      <div className='App'>
        <Navbar
          className='navbar-wrap'
          logo='/assets/logo.svg'
          links={navLinks}
        />
        <Switch>
          <Route exact path='/app' component={AppPage} />
          <Route path='/' component={Homepage} />
        </Switch>
        <Footer
          logo='/assets/logo-light.svg'
          brief='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
        for everyone'
          copyright='©Trafalgar PTY LTD 2020. All rights reserved'
          data={FOOTER_LINKS_DATA}
        />
      </div>
    );
  }
}

export default App;
