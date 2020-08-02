import React from 'react';
import './App.scss';
import Homepage from './pages/Homepage/Homepage-component';
import Navbar from './components/NavBar/Navbar-component';
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
        <Navbar className='navbar-wrap' links={navLinks} />
        <Homepage />
      </div>
    );
  }
}

export default App;
