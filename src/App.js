import React from 'react';
import './App.scss';
import Header from './components/header/header';
import ProfileImage from './components/profile-image/profile-image';
import Button from './components/button/button';
import Card from './components/card/card';
import glass from '../src/components/card/Frame.png'

class App extends React.Component {
  render() {
    return <div className='App'>
      <Header/>
      {/* Added a placeholder image for testing purposes. Didn't add any css or anything except a width and height for testing */}
      <ProfileImage image={"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}/>
      
      Outline
      <Button buttonClass="outline" value={"Learn More"}/>

      Primary
      <Button buttonClass="primary" value={"Button Component (primary)"}/>


      <Card
      image={glass}
      title={"Search doctor"}
      description={"Choose your doctor from thousands of specialist, general, and trusted hospitals"}
      />
            Card Component

      
      </div>;
  }
}

export default App;
