import React from 'react';

import './PageSection-styles.scss';

const PageSection = ({ children, ...otherProps }) => (
  <section {...otherProps}>{children}</section>
);

export default PageSection;
