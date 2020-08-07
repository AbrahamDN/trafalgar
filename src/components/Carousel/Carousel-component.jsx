import React, { useState, useEffect } from 'react';

import './Carousel-styles.scss';
import arrow from '../../arrow.svg';

const Carousel = ({ slides = [], ...otherProps }) => {
  const [count, setCount] = useState(0);
  let currentSlide = slides[count];

  useEffect(() => {
    if (count >= slides.length) setCount(0);
    if (count < 0) setCount(slides.length - 1);
  }, [count]);

  return (
    <div {...otherProps}>
      <div>{currentSlide || 'No slides'}</div>

      {slides.length >= 1 ? (
        <div className='arrows'>
          <span onClick={() => setCount(count - 1)}>
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
          <span onClick={() => setCount(count + 1)}>
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
