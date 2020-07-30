import React from 'react';
import ProfileImage from '../../components/ProfileImage/ProfileImage-component';
import Button from '../../components/Button/Button-component';

const Homepage = ({ ...props }) => {
  return (
  <div>
    <p>Homepage component</p>
    <ProfileImage image={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}/>
    <Button value={"Learn More"} buttonClass={"primary"}/>
    <Button value={"Learn More"} buttonClass={"outline"}/>
  </div>
  )
  
};

export default Homepage;
