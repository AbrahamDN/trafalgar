import React, { useState, useEffect, useRef } from 'react';

import './Carousel-styles.scss';
import arrow from '../../arrow.svg';

const Carousel = ({ slides = [], ...otherProps }) => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  let currentSlide = slides[count];
  const carouselSlide = useRef();

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setAnimate(true);
    }
  };
  const handleNext = () => {
    if (count < 2) {
      setCount(count + 1);
      setAnimate(true);
    }
  };

  useEffect(() => {
    if (count >= slides.length) setCount(0);
    if (count < 0) setCount(slides.length - 1);
    setTimeout(() => {
      if (animate) setAnimate(false);
    }, 1000);
  }, [count, slides.length, animate]);

  return (
    <div {...otherProps}>
      <div className='slides-wrapper'>
        <div ref={carouselSlide} className={animate ? 'carousel-slide' : null}>
          {currentSlide || 'No slides'}
        </div>
      </div>

      {slides.length >= 1 ? (
        <div className='arrows'>
          <span onClick={() => handlePrev()}>
            <img
              src={arrow}
              className={count === 0 ? 'current arrow prev' : 'arrow prev'}
              alt='arrow'
            />
          </span>
          <span className='slides-dots'>
            {slides.map((slide, i) => (
              <span
                key={i}
                className={slide === currentSlide ? 'current' : null}
                onClick={() => setCount(i)}>
                •
              </span>
            ))}
          </span>
          <span onClick={() => handleNext()}>
            <img
              src={arrow}
              className={
                slides.length - 1 === count
                  ? 'current arrow next'
                  : 'arrow next'
              }
              alt='arrow'
            />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
