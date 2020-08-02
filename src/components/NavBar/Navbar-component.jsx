import React from 'react';

import './Navbar-styles.scss';

import NavLinks from '../NavLinks/NavLinks-component';

const Navbar = ({ logo, links, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <div className='navbar'>
        <img src={logo} alt='logo' />
        <nav>
          <NavLinks links={links} className='nav-list' />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
