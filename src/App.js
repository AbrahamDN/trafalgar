import React from 'react';
import './App.scss';
import ProfileImage from './components/ProfileImage/Profile-Image-component';
import Button from './components/Button/Button-component';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ProfileImage image={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}/>
        <Button value="Learn More" buttonClass="primary"/>
        <Button value="Learn More" buttonClass="outline"/>
      </div>
    );
  }
}


export default App;
