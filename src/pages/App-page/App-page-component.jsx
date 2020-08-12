import React from 'react';
import PageSection from '../../components/PageSection/PageSection-component';
import Card from '../../components/Card/Card-component';
import './App-page-styles.scss';

const AppPage = () => {
  return (
    <div>
      <PageSection className='featured-section'>
        <div className='featured-header'>
          <h1>Featured app title here</h1>
          <p>Description of featured app item here</p>
        </div>

        <Card
          className='featured-card-app'
          icon='/assets/svg/online-pharmacy-icon.svg'
          title='Online pharmacy'
          text='Buy  your medicines with our mobile application with a simple delivery system'
        />
      </PageSection>

      <PageSection className='services-section'>
        <div className='apps-heading'>
          <h2>Other Apps</h2>
          <hr />
          <p>
            We have a number of apps that allow users to gain the best
            information they need for their health needs.
            <br />
            <strong>
              {' '}
              Clicking one of these cards will take you to the homepage of our
              app.
            </strong>
          </p>
        </div>
        <div className='card-container'>
          <Card
            className='card-app'
            icon='/assets/svg/search-icon.svg'
            title='Search doctor'
            text='Choose your doctor from thousands of specialist, general, and trusted hospitals'
          />
          <Card
            className='card-app'
            icon='/assets/svg/online-pharmacy-icon.svg'
            title='Online pharmacy'
            text='Buy  your medicines with our mobile application with a simple delivery system'
          />
          <Card
            className='card-app'
            icon='/assets/svg/consultation-icon.svg'
            title='Consultation'
            text='Free consultation with our trusted doctors and get the best recomendations'
          />
          <Card
            className='card-app'
            icon='/assets/svg/details-info-icon.svg'
            title='Details info'
            text='Free consultation with our trusted doctors and get the best recomendations'
          />
          <Card
            className='card-app'
            icon='/assets/svg/emergency-care-icon.svg'
            title='Emergency care'
            text='You can get 24/7 urgent care for yourself or your children and your
                    lovely family'
          />
          <Card
            className='card-app'
            icon='/assets/svg/tracking-icon.svg'
            title='Tracking'
            text='Track and save your medical history and health data'
          />
        </div>
      </PageSection>
    </div>
  );
};

export default AppPage;
