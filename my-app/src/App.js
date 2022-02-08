import React from 'react';
import './App.css';
import Card from './components/Card';
import logo from './images/ironhack-logo.png';
import menuList from './images/icon1.png';
import declarativeIcon from './images/icon2.png';
import componentIcon from './images/icon3.png';
import singleWayIcon from './images/icon4.png';
import jsxIcon from './images/icon5.png';

function App() {
  return (
    <div className="App">
      <header className="header">
          <img src={logo} className="logo-ih" alt="logo" />
          <img src={menuList} className="menu-list" alt="menu-list" />
      <div className="header-content">
        <h1>Say Hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend-library, and become a super Ninja Developer.</p>
        <button className='button'>Awesome!</button>
      </div>
      </header>
      <div className="card-main">
          <Card 
          image={declarativeIcon} 
          title="Declarative"
          text="React makes it painless to create interactive UI."
          />
          <Card
            image={componentIcon}
            title="Components"
            text="Build encapsulated components that manage their state."
          />
          <Card
          image={singleWayIcon} 
          title="Single-Way"
          text="A set of immutable values are passed to the components."
          />
          <Card
            image={jsxIcon}
            title="JSX"
            text="Statically-typed, designed to run on modern browsers."
          /> 
      </div>
    </div>
  );
}

export default App;
 