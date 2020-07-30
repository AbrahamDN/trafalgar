import React from 'react';
import Button from '../../components/Button/Button-component';

const Homepage = ({ ...props }) => {
  return (
  <div>
    <p>Homepage component</p>
    <Button value={"Learn More"} buttonClass={"primary"}/>
    <Button value={"Learn More"} buttonClass={"outline"}/>
  </div>
  )
  
};

export default Homepage;
