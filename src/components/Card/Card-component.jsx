import React from 'react';
import { Link } from 'react-router-dom';

import './Card-styles.scss';
import { ReactComponent as Arrow } from '../../arrow.svg';

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
        <p className={link ? 'card-p' : null}>{text}</p>
        {link ? (
          <Link to={link} className='card-link'>
            {linkLabel || 'Read more'}
            <Arrow style={{ marginLeft: '1.5ch' }} />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
