import React from 'react';

import './NavLinks-styles.scss';

const NavLinks = ({ links, ...otherProps }) => {
  return (
    <ul {...otherProps}>
      {links
        ? links.map((link, index) => {
            const { name, url, active } = link;
            const handleActive = active ? 'active' : null;
            return (
              <li key={index}>
                <a className={handleActive} href={url}>
                  {name}
                </a>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default NavLinks;
