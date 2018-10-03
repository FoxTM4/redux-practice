import React, { Component } from 'react';
import './App.css';
import LeftSection from './components/leftSection/LeftSection';
import RightSection from './components/rightSection/RightSection';

class App extends Component {
  render() {
    return (
      <div className="app--component">
        <header>
          <h1> react redux theme changer </h1>
        </header> 
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

export default App;