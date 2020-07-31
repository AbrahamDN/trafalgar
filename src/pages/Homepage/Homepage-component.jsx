import React from 'react';
import PageSection from '../../components/PageSection/PageSection-component';
import SplitContent from '../../components/SplitContent/SplitContent-container';

const Homepage = ({ ...props }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <PageSection>
        <h2>Section Component</h2>
        <SplitContent>
          <div>Split</div>
          <div>Content</div>
        </SplitContent>
      </PageSection>
    </div>
  );
};

export default Homepage;
