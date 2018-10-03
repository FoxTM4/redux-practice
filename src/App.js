import React, { Component } from 'react';
import './App.css';
import LeftSection from './components/leftSection/LeftSection';
import RightSection from './components/rightSection/RightSection';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { backgroundColor, textColor, fontFamily } = this.props;
    return (
      <div className="app--component" style={{borderColor: textColor}}>
        <header style={{backgroundColor, color: textColor, borderColor: textColor, fontFamily}}>
          <h1> react redux theme changer </h1>
        </header> 
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

function mapStateToProps ({ backgroundColor, textColor, fontFamily }) {
  return { backgroundColor, textColor, fontFamily }
}
export default connect(mapStateToProps)(App);
