import React from 'react';

import PageSection from '../../components/PageSection/PageSection-component';
import Button from '../../components/Button/Button-component';
import Card from '../../components/Card/Card-component';
import Testimonial from '../../components/Testimonial/Testimonial-container';

import './Homepage-styles.scss';
import { ReactComponent as Logo } from '../../arrow.svg';

const Homepage = () => {
  const articles = [
    {
      image: '/assets/jpg/medical-shots.jpg',
      title: 'Disease detection, check up in the laboratory',
      text:
        'In this case, the role of the health laboratory is very important to do a disease detection...',
      link: '/',
    },
    {
      image: '/assets/jpg/microscope.jpg',
      title: 'Herbal medicines that are safe for consumption',
      text:
        'Herbal medicine is very widely used at this time because of its very good for your health...',
      link: '/',
    },
    {
      image: '/assets/jpg/face-mask.jpg',
      title: 'Natural care for healthy facial skin',
      text:
        'A healthy lifestyle should start from now and also for your skin health. There are some...',
      link: '/',
    },
  ];

  return (
    <div className='homepage'>
      <PageSection className='header-section'>
        <div className='split-content'>
          <div className='split-content-text'>
            <h1>Virtual healthcare for you</h1>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <Button value='Consult today' primary />
          </div>
          <div className='split-content-image'>
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

      <PageSection className='split-section'>
        <div className='split-content'>
          <div className='split-content-image'>
            <img
              src='/assets/png/trafalgar-illustration sec02 1.png'
              alt='hero'
            />
          </div>
          <div className='split-content-text'>
            <h2>Virtual healthcare for you</h2>
            <hr />
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <br />
            <Button value='Learn more' />
          </div>
        </div>
        <div className='split-content'>
          <div className='split-content-text'>
            <h2>Virtual healthcare for you</h2>
            <hr />
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <br />
            <button>
              Download
              <Logo />
            </button>
          </div>
          <div className='split-content-image'>
            <img
              src='/assets/png/trafalgar-illustration sec03 1.png'
              alt='hero'
            />
          </div>
        </div>
      </PageSection>

      <PageSection className='testimonials-section'>
        <div>
          <Testimonial
            title='What our customer are saying'
            name='Edward Newgate'
            info='Founder Circle'
            review='
        “Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously 
        (no tedeous form, long calls, or administrative hassle) 
        and securely”
        '
          />
        </div>
      </PageSection>

      <PageSection className='articles-section'>
        <div>
          <h2>Check out our latest article</h2>
          <hr />
        </div>
        <div className='card-container'>
          {articles.map((article, i) => {
            const { image, title, text, link } = article;
            return (
              <Card
                key={i}
                image={image}
                title={title}
                text={text}
                link={link}
              />
            );
          })}
        </div>
        <button>View all</button>
      </PageSection>
    </div>
  );
};

export default Homepage;
