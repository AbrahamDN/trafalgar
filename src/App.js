import React from 'react';
import './App.scss';
import Homepage from './pages/Homepage/Homepage-component';
import ProfileImage from './components/ProfileImage/Profile-Image-component';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Homepage />
        <ProfileImage image={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}/>
      </div>
    );
  }
}


export default App;
