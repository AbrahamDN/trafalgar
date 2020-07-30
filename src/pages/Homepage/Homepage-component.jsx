import React from 'react';
import ProfileImage from '../../components/ProfileImage/ProfileImage-component';

const Homepage = ({ ...props }) => {
  return (
  <div>
    <p>Homepage component</p>
    <ProfileImage image={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}/>
  </div>
  )
  
};

export default Homepage;
