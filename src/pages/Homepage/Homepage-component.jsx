import React from 'react';

import Header from '../../components/Header/Header-component';
import PageSection from '../../components/PageSection/PageSection-component';
import SplitContent from '../../components/SplitContent/SplitContent-container';
import Button from '../../components/Button/Button-component';

import './Homepage-styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <PageSection>
        <SplitContent>
          <div>
            <h1>Virtual healthcare for you</h1>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <Button buttonClass='outline' value='Consult today' />
          </div>
          <div>
            <img
              src='/assets/png/trafalgar-header illustration 1.png'
              alt='hero'
            />
          </div>
        </SplitContent>
      </PageSection>
    </div>
  );
};

export default Homepage;
