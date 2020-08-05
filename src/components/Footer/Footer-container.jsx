import React from 'react';
import './Footer-styles.scss';

import FooterGroupLinks from './FooterGroupLinks/FooterGroupLinks-component';

const Footer = ({ logo, alt, brief, copyright, data, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <div className='ft'>
        <div className='ft-wrap'>
          <div className='ft-main'>
            <div className='logo'>
              <img src={logo} alt={alt || 'logo'} />
            </div>
            <div className='ft-para'>
              <p>{brief}</p>
              <p>{copyright}</p>
            </div>
          </div>
          <FooterGroupLinks data={data} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
