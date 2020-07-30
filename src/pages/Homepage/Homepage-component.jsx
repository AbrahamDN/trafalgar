import React from 'react';
import PageSection from '../../components/PageSection/PageSection-component';
import Button from '../../components/Button/Button-component';

const Homepage = ({ ...props }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <PageSection />
      <Button buttonClass="primary" value="Learn More"/>
      <Button buttonClass="outline" value="Learn More"/>
    </div>
  );
};

export default Homepage;
