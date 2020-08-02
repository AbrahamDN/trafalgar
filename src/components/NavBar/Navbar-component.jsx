import React from 'react';

import './Navbar-styles.scss';

import NavLinks from '../NavLinks/NavLinks-component';

const Navbar = ({ links, ...otherProps }) => {
  return (
    <div className='header' {...otherProps}>
      <img src='/assets/logo.svg' alt='logo' />
      <nav>
        <NavLinks links={links} className='nav-list' />
      </nav>
    </div>
  );
};

export default Navbar;
