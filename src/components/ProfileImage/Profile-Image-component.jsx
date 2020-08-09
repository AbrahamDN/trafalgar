import React from 'react';

import './Profile-image-styles.scss';

const ProfileImage = ({ image, alt, ...otherProps }) => {
  return (
    <div {...otherProps}>
      {image ? (
        <img className='profile-image' src={image} alt={alt || 'profile'} />
      ) : null}
    </div>
  );
};

export default ProfileImage;
