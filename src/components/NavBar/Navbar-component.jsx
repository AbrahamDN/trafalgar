import React, { Component } from 'react';
import './Navbar-styles.scss';
import NavLinks from '../NavLinks/NavLinks-component';
import Hamburger from '../Hamburger/Hamburger-component';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      open: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  changeOpen = () => {
    this.setState({ open: !this.state.open });

  };


  render() {
    const { logo, links, ...otherProps } = this.props;
    let information;

    if (this.state.width > 850) {
      information = <NavLinks links={links} className='nav-list' />;
     
    } else if (this.state.width < 850) {
      information = (
        <div>
          <NavLinks links={links} className='nav-hidden' />
          <Hamburger
            aria-label='Close navigation'
            className='open-nav'
            onClick={this.changeOpen}
            shown
          />
        </div>
      );
    }
    if (this.state.open) {
      return (
        <div className='nav-mobile'>
          <Hamburger
            aria-label='Close navigation'
            className='open-nav'
            onClick={this.changeOpen}
          />
          <NavLinks links={links} className='nav-list-mobile' />
        </div>
      );
    }

    return (
      <div {...otherProps}>
        <div className='navbar-wrapper'>
          <img src={logo} alt='logo' />
          <div className='navbar'>
            <nav>{information}</nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
