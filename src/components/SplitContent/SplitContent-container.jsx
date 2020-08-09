import React from 'react';

import './SplitContent-container-styles.scss';

const SplitContent = ({ children, ...otherProps }) => {
  return (
    <div className='split-screen' {...otherProps}>
      {children}
    </div>
  );
};

export default SplitContent;
