import React from 'react';

import { ReactComponent as Logo } from '/assets/logo.svg';
import './Navbar-styles.scss';

import NavLinks from '../NavLinks/NavLinks-component';

const Navbar = ({ links, ...otherProps }) => {
  return (
    <div className='header' {...otherProps}>
      <Logo />
      <nav>
        <NavLinks links={links} className='nav-list' />
      </nav>
    </div>
  );
};

export default Navbar;
