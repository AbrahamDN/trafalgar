import React from 'react';
import './Testimonial-container-styles.scss';
import ProfileImage from '../ProfileImage/Profile-Image-component';
const Testimonial = ({
  title,
  name,
  info,
  review,
  image,
  alt,
  ...otherProps
}) => {
  return (
    <div className='testimonial' {...otherProps}>
      <div className='testimonial-content'>
        <h1>{title}</h1>
        <hr />
        <div className='testimonial-main'>
          {name && image ? (
            <div className='testimonial-info'>
              <ProfileImage image={image} alt={alt} />
              <span>
                <h3>{name}</h3>
                <p>{info}</p>
              </span>
            </div>
          ) : null}
          <div className='testimonial-review'>
            <p>{`"${review || 'Review'}"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
