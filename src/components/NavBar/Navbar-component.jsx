import React, { useState} from 'react';
import './Navbar-styles.scss';
import NavLinks from '../NavLinks/NavLinks-component';
import Hamburger from '../Hamburger/Hamburger-component';

const Navbar =(props) => {
  const [width, setWidth] = useState(window.innerWidth)
  let [open, setOpen] = useState(false)

 const updateWindowDimensions = () => {
   setWidth(window.innerWidth)
 }

 const changeOpen= () => {
   setOpen(!open);
  };

  window.addEventListener("resize", updateWindowDimensions);

  const { logo, links, ...otherProps } = props;
  let information;
  if (width > 850) {
    information = <NavLinks links={links} className='nav-list' />;
    open = false
  } else if (width < 850) {
    information = (
    <div>
      <NavLinks links={links} className='nav-hidden' />
      <Hamburger
      aria-label='Close navigation'
      className='open-nav'
      onClick={changeOpen}
      shown
    />
    </div>
    );
  }
  if (open) {
    return (
      <div className='nav-mobile'>
        
        <div className="logo-close">
          <img src={logo} alt='logo' />
          <Hamburger
          aria-label='Close navigation'
          className='open-nav'
          onClick={changeOpen}
        />
        </div>
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
export default Navbar;
