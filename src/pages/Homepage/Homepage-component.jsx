import React from 'react';

import PageSection from '../../components/PageSection/PageSection-component';
import Button from '../../components/Button/Button-component';
import Card from '../../components/Card/Card-component';

import './Homepage-styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <PageSection className='header-section'>
        <div className='split-content'>
          <div className='left-content'>
            <h1>Virtual healthcare for you</h1>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <Button value='Consult today' primary />
          </div>
          <div className='right-content'>
            <img
              src='/assets/png/trafalgar-header illustration 1.png'
              alt='hero'
            />
          </div>
        </div>
      </PageSection>

      <PageSection className='services-section'>
        <div>
          <h2>Our services</h2>
          <hr />
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className='card-container'>
          <Card
            icon='/assets/svg/search-icon.svg'
            title='Search doctor'
            text='Choose your doctor from thousands of specialist, general, and trusted hospitals'
          />
          <Card
            icon='/assets/svg/online-pharmacy-icon.svg'
            title='Online pharmacy'
            text='Buy  your medicines with our mobile application with a simple delivery system'
          />
          <Card
            icon='/assets/svg/consultation-icon.svg'
            title='Consultation'
            text='Free consultation with our trusted doctors and get the best recomendations'
          />
          <Card
            icon='/assets/svg/details-info-icon.svg'
            title='Details info'
            text='Free consultation with our trusted doctors and get the best recomendations'
          />
          <Card
            icon='/assets/svg/emergency-care-icon.svg'
            title='Emergency care'
            text='You can get 24/7 urgent care for yourself or your children and your
            lovely family'
          />
          <Card
            icon='/assets/svg/tracking-icon.svg'
            title='Tracking'
            text='Track and save your medical history and health data'
          />
        </div>
        <div>
          <Button value='Learn More' />
        </div>
      </PageSection>
    </div>
  );
};

export default Homepage;
