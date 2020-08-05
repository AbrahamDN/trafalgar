import React from 'react';

import './FooterGroupLinks-styles.scss';

import NavLinks from '../../NavLinks/NavLinks-component';

const FooterGroupLinks = ({ data, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <div className='footer-links'>
        {data.map((linkGroup, i) => {
          const groupName = linkGroup[0];
          const groupLinks = linkGroup[1];

          return (
            <div key={i}>
              <h4>{groupName}</h4>
              <NavLinks links={groupLinks} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterGroupLinks;
