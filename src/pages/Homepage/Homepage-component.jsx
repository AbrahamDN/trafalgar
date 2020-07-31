import React from 'react';
import PageSection from '../../components/PageSection/PageSection-component';
import SplitContent from '../../components/SplitContent/SplitContent-container';

const Homepage = ({ ...props }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <PageSection />
      <SplitContent>
        <div>Split</div>
        <div>Content</div>
      </SplitContent>
    </div>
  );
};

export default Homepage;
