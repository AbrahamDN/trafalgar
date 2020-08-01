import React from 'react';
import { Link } from 'react-router-dom';

import './Card-styles.scss';

const Card = ({
  image,
  icon,
  title,
  text,
  link,
  linkLabel,
  alt,
  ...otherProps
}) => {
  return (
    <div className='card' {...otherProps}>
      {image || icon ? (
        <div className={image ? 'card-image' : 'card-icon'}>
          <img src={image || icon} alt={alt || 'card'} />
        </div>
      ) : null}
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{text}</p>
        {link ? <Link to={link}>{linkLabel || 'Read more'}</Link> : null}
      </div>
    </div>
  );
};

export default Card;
